import AddPasswordForm from "./_features/passwords/AddPasswordForm";
import PasswordsList from "./_features/passwords/PasswordsList";

export default function Home() {
  return (
    <main>
      <AddPasswordForm />
      <hr />
      <PasswordsList />
    </main>
  );
}
