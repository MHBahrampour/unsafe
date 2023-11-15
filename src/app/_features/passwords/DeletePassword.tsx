import SDialog from "@/app/_components/ui/SDialog";
import { Passwords } from "@/app/_types/commonTypes";
import { SetStateAction, useState } from "react";
import { deletePassword } from "./passwordsSlice";
import { useAppDispatch } from "@/app/_hooks/reduxHooks";
import { Typography } from "@mui/material";
import { IoAlert } from "react-icons/io5";

type DeleteRequestStatus = "idle" | "pending";

interface DeletePasswordProps {
  showDeleteDialog: boolean;
  setShowDeleteDialog: (value: SetStateAction<boolean>) => void;
  currentPassword: Passwords;
}

export default function DeletePassword({
  showDeleteDialog,
  setShowDeleteDialog,
  currentPassword,
}: DeletePasswordProps) {
  const dispatch = useAppDispatch();

  const [deleteRequestStatus, setDeleteRequestStatus] =
    useState<DeleteRequestStatus>("idle");

  const onDeletePasswordClicked = () => {
    try {
      setDeleteRequestStatus("pending");
      dispatch(deletePassword(currentPassword)).unwrap();
    } catch (err) {
      console.error("Failed to delete the password", err);
    } finally {
      setDeleteRequestStatus("idle");
    }
  };

  return (
    <SDialog
      isOpen={showDeleteDialog}
      setIsOpen={setShowDeleteDialog}
      buttonValue="Delete"
      buttonFunction={onDeletePasswordClicked}
    >
      <Typography variant="body1">
        Are you sure you want to{" "}
        <span className="text-secondary-light">delete</span> this password? This
        action is{" "}
        <span className="text-secondary-light">
          irreversible and will permanently
        </span>{" "}
        remove the stored password.
      </Typography>
    </SDialog>
  );
}
