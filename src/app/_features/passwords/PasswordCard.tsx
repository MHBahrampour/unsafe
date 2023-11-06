import { Passwords } from "@/app/_types/commonTypes";
import { Typography } from "@mui/material";

interface PasswordCardProps {
  password: Passwords;
}

export default function PasswordCard({ password }: PasswordCardProps) {
  return (
    <article className="">
      <Typography variant="body1" className="!font-bold">
        {password.title}
      </Typography>
      <Typography variant="body1">{password.loginUrl}</Typography>
    </article>
  );
}
