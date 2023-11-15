"use client";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";
import PasswordExcerpt from "./PasswordExcerpt";
import { Typography } from "@mui/material";

export default function PasswordsList() {
  const { passwords, passwordsStatus, passwordsError } = useGetPasswords();

  let content;
  if (passwordsStatus === "loading") {
    content = <Typography variant="body1">Loading...</Typography>;
  } else if (passwordsStatus === "succeeded") {
    const sortedPasswords = passwords
      .slice()
      .sort((a, b) => (b.id || 0) - (a.id || 0));
    content = sortedPasswords.map((password) => (
      <PasswordExcerpt key={password.id} password={password} />
    ));
  } else if (passwordsStatus === "failed") {
    content = <Typography variant="body1">{passwordsError}</Typography>;
  }

  return (
    <div className="max-h-[calc(100dvh-104px)] overflow-scroll">{content}</div>
  );
}
