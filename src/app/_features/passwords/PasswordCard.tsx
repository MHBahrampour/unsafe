import { Passwords } from "@/app/_types/commonTypes";

interface PasswordCardProps {
  password: Passwords;
}

export default function PasswordCard({ password }: PasswordCardProps) {
  return (
    <article className="px-4 py-2" key={password.id}>
      <p className="font-bold">{password.title}</p>
      <p>{password.loginUrl}</p>
    </article>
  );
}
