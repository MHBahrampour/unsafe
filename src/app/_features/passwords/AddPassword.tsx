"use client";
import { useAppDispatch } from "@/app/_hooks/reduxHooks";
import { SetStateAction, useState } from "react";
import { addPassword } from "./passwordsSlice";
import { Passwords } from "@/app/_types/commonTypes";
import SDialog from "@/app/_components/ui/SDialog";
import PasswordForm from "./PasswordForm";
import { Button } from "@mui/material";

type AddRequestStatus = "idle" | "pending";

const INIT_NEWPASSWORD: Passwords = {
  id: null,
  title: "",
  loginUrl: "",
  username: "",
  password: "",
};

interface AddPasswordProps {
  showAddDialog: boolean;
  setShowAddDialog: (value: SetStateAction<boolean>) => void;
}

export default function AddPassword({
  showAddDialog,
  setShowAddDialog,
}: AddPasswordProps) {
  const dispatch = useAppDispatch();

  const [addRequestStatus, setAddRequestStatus] =
    useState<AddRequestStatus>("idle");

  const [newPassword, setNewPassword] = useState<Passwords>(INIT_NEWPASSWORD);

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

  const ActionButton = (
    <Button
      variant="contained"
      className="justify-self-end py-2"
      disabled={!canAddPassword}
      onClick={() => {
        onAddPasswordClicked();
        setShowAddDialog(false);
      }}
    >
      Create
    </Button>
  );

  return (
    <SDialog
      isOpen={showAddDialog}
      setIsOpen={setShowAddDialog}
      actionButton={ActionButton}
    >
      <PasswordForm data={newPassword} setData={setNewPassword} />
    </SDialog>
  );
}
