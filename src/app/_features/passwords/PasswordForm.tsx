import { Passwords } from "@/app/_types/commonTypes";
import { TextField } from "@mui/material";
import { SetStateAction } from "react";

interface PasswordFormProps {
  data: Passwords;
  setData: (value: SetStateAction<Passwords>) => void;
}

export default function PasswordForm({ data, setData }: PasswordFormProps) {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="grid gap-2">
      <TextField
        label="Title"
        id="title"
        name="title"
        value={data.title}
        onChange={onInputChange}
        required
      />
      <TextField
        label="Login URL"
        id="loginUrl"
        name="loginUrl"
        value={data.loginUrl}
        onChange={onInputChange}
        required
      />
      <TextField
        label="Username"
        id="username"
        name="username"
        value={data.username}
        onChange={onInputChange}
        required
      />
      <TextField
        label="Password"
        id="password"
        name="password"
        value={data.password}
        onChange={onInputChange}
        required
      />
    </form>
  );
}
