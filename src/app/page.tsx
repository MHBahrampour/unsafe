import PasswordsList from "./_features/passwords/PasswordsList";
import PasswordDetail from "./_features/passwords/PasswordDetail";
import ActionMenu from "./_components/ActionMenu";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-[1fr_1.5fr] gap-6 max-w-4xl mx-auto">
        {/* Right column */}
        <div className="flex flex-col gap-4">
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
