import PasswordsList from "./_features/passwords/PasswordsList";
import PasswordDetail from "./_features/passwords/PasswordDetail";
import ActionMenu from "./_components/ActionMenu";

export default function Home() {
  return (
    <main className="p-4 h-screen">
      <div className="grid grid-cols-[1fr_1.5fr] h-full gap-4  mx-auto max-w-5xl">
        {/* Right column */}
        <div className="flex flex-col gap-2">
          <ActionMenu />
          <PasswordsList />
        </div>

        {/* Left column */}
        <div className="border-l-2 border-l-gray-300">
          <PasswordDetail />
        </div>
      </div>
    </main>
  );
}
