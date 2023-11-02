"use client";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";
import PasswordCard from "./PasswordCard";

export default function PasswordsList() {
  const { passwords, passwordsStatus, passwordsError } = useGetPasswords();

  let content;
  if (passwordsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (passwordsStatus === "succeeded") {
    const sortedPasswords = passwords.slice().sort((a, b) => b.id - a.id);
    content = sortedPasswords.map((password) => (
      <PasswordCard password={password} />
    ));
  } else if (passwordsStatus === "failed") {
    content = <p>{passwordsError}</p>;
  }

  return <section>{content}</section>;
}
