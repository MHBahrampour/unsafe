"use client";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";

export default function PasswordsList() {
  const { passwords, passwordsStatus, passwordsError } = useGetPasswords();

  let content;
  if (passwordsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (passwordsStatus === "succeeded") {
    content = passwords.map((password) => (
      <article className="px-4 py-2" key={password.id}>
        <p className="font-bold">{password.title}</p>
        <p>{password.loginUrl}</p>
      </article>
    ));
  } else if (passwordsStatus === "failed") {
    content = <p>{passwordsError}</p>;
  }

  return <section>{content}</section>;
}
