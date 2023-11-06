"use client";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";
import PasswordCard from "./PasswordCard";
import { Typography } from "@mui/material";

export default function PasswordsList() {
  const { passwords, passwordsStatus, passwordsError } = useGetPasswords();

  let content;
  if (passwordsStatus === "loading") {
    content = <Typography variant="body1">Loading...</Typography>;
  } else if (passwordsStatus === "succeeded") {
    content = passwords.map((password) => (
      <PasswordCard key={password.id} password={password} />
    ));
  } else if (passwordsStatus === "failed") {
    content = <Typography variant="body1">{passwordsError}</Typography>;
  }

  return <section className="grid gap-4">{content}</section>;
}
