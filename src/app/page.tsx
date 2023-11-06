import { Divider } from "@mui/material";
import AddPasswordForm from "./_features/passwords/AddPasswordForm";
import PasswordsList from "./_features/passwords/PasswordsList";

export default function Home() {
  return (
    <main className="grid gap-8 p-4">
      <AddPasswordForm />
      <Divider />
      <PasswordsList />
    </main>
  );
}
