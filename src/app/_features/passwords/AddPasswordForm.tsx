"use client";
import { useAppDispatch } from "@/app/_hooks/reduxHooks";
import { useState } from "react";
import { addPassword } from "./passwordsSlice";
import { Passwords } from "@/app/_types/commonTypes";
import { Button, TextField } from "@mui/material";

type AddRequestStatus = "idle" | "pending";

const INIT_NEWPASSWORD: Passwords = {
  id: "",
  title: "",
  loginUrl: "",
  username: "",
  password: "",
};

export default function AddPasswordForm() {
  const dispatch = useAppDispatch();

  const [newPassword, setNewPassword] = useState<Passwords>(INIT_NEWPASSWORD);
  const [addRequestStatus, setAddRequestStatus] =
    useState<AddRequestStatus>("idle");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPassword((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const canAddPassword =
    Object.values(newPassword).slice(1).every(Boolean) &&
    addRequestStatus === "idle";

  const onAddPasswordClicked = () => {
    if (canAddPassword) {
      try {
        setAddRequestStatus("pending");
        dispatch(addPassword(newPassword)).unwrap();
        setNewPassword(INIT_NEWPASSWORD);
      } catch (err) {
        console.error("Failed to add new password", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section>
      <form className="grid gap-2">
        <TextField
          label="Title"
          id="title"
          name="title"
          value={newPassword.title}
          onChange={onInputChange}
          required
        />
        <TextField
          label="Login URL"
          id="loginUrl"
          name="loginUrl"
          value={newPassword.loginUrl}
          onChange={onInputChange}
          required
        />
        <TextField
          label="Username"
          id="username"
          name="username"
          value={newPassword.username}
          onChange={onInputChange}
          required
        />
        <TextField
          label="Password"
          id="password"
          name="password"
          value={newPassword.password}
          onChange={onInputChange}
          required
        />

        <Button
          variant="contained"
          disabled={!canAddPassword}
          onClick={onAddPasswordClicked}
        >
          ADD PASSWORD
        </Button>
      </form>
    </section>
  );
}
