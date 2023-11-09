import PasswordsList from "./_features/passwords/PasswordsList";
import PasswordDetail from "./_features/passwords/PasswordDetail";
import ActionMenu from "./_components/ActionMenu";

export default function Home() {
  return (
    <main className="grid gap-8 p-4 h-screen">
      <div className="grid grid-cols-[1fr_1.5fr] border-gray-300 border-2 rounded-2xl">
        {/* Right column */}
        <div className="flex flex-col gap-4 p-4">
          <ActionMenu />
          <PasswordsList />
        </div>

        {/* Left column */}
        <div className="p-4 border-l-2 border-l-gray-300">
          <PasswordDetail />
        </div>
      </div>
    </main>
  );
}
