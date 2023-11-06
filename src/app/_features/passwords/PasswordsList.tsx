"use client";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";
import PasswordCard from "./PasswordCard";

export default function PasswordsList() {
  const { passwords, passwordsStatus, passwordsError } = useGetPasswords();

  let content;
  if (passwordsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (passwordsStatus === "succeeded") {
    content = passwords.map((password) => (
      <PasswordCard key={password.id} password={password} />
    ));
  } else if (passwordsStatus === "failed") {
    content = <p>{passwordsError}</p>;
  }

  return <section>{content}</section>;
}
