"use client";
import { useAppDispatch } from "@/app/_hooks/reduxHooks";
import { useState } from "react";
import { addPassword } from "./passwordsSlice";
import { Passwords } from "@/app/_types/commonTypes";
import { nanoid } from "@reduxjs/toolkit";

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
        // Generate id for new password
        setNewPassword((state) => ({ ...state, id: nanoid() }));

        setAddRequestStatus("pending");
        dispatch(addPassword(newPassword)).unwrap();

        setNewPassword(INIT_NEWPASSWORD);
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section className="px-4 py-2">
      <form className="grid gap-2">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPassword.title}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="loginUrl">URL:</label>
          <input
            type="text"
            id="loginUrl"
            name="loginUrl"
            value={newPassword.loginUrl}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={newPassword.username}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={newPassword.password}
            onChange={onInputChange}
            required
          />
        </div>

        <div>
          <button
            disabled={!canAddPassword}
            onClick={onAddPasswordClicked}
            className="flex justify-center items-center px-4 py-2 bg-black rounded-lg text-white"
          >
            ADD PASSWORD
          </button>
        </div>
      </form>
    </section>
  );
}
