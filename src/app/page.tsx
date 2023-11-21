import PasswordsList from "./_features/passwords/PasswordsList";
import PasswordDetail from "./_features/passwords/PasswordDetail";
import ActionMenu from "./_components/ActionMenu";

export default function Home() {
  return (
    <main className="p-4 sm:h-[100dvh]">
      <div className="sm:grid sm:grid-cols-[1fr_1.5fr] sm:h-full sm:gap-4 sm:mx-auto sm:max-w-5xl">
        {/* Right column */}
        <div className="flex flex-col gap-2">
          <ActionMenu />
          <PasswordsList />
        </div>

        {/* Left column */}
        <div className="hidden sm:block">
          <PasswordDetail />
        </div>
      </div>
    </main>
  );
}
