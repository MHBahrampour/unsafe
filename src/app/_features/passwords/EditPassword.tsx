import SDialog from "@/app/_components/ui/SDialog";
import { SetStateAction, useEffect, useState } from "react";
import PasswordForm from "./PasswordForm";
import { Passwords } from "@/app/_types/commonTypes";
import { useAppDispatch } from "@/app/_hooks/reduxHooks";
import { editPassword } from "./passwordsSlice";
import _ from "lodash";
import { Button } from "@mui/material";

type EditRequestStatus = "idle" | "pending";

const INIT_NEWPASSWORD: Passwords = {
  id: null,
  title: "",
  loginUrl: "",
  username: "",
  password: "",
};

interface EditPasswordProps {
  showEditDialog: boolean;
  setShowEditDialog: (value: SetStateAction<boolean>) => void;
  currentPassword: Passwords;
}

export default function EditPassword({
  showEditDialog,
  setShowEditDialog,
  currentPassword,
}: EditPasswordProps) {
  const dispatch = useAppDispatch();

  const [editRequestStatus, setEditRequestStatus] =
    useState<EditRequestStatus>("idle");

  const [editedPassword, setEditedPassword] =
    useState<Passwords>(INIT_NEWPASSWORD);

  useEffect(() => setEditedPassword(currentPassword), [currentPassword]);

  const [canEditPassword, setCanEditPassword] = useState(false);
  useEffect(
    () =>
      setCanEditPassword(
        !_.isEqual(currentPassword, editedPassword) &&
          editRequestStatus === "idle"
      ),
    [editedPassword]
  );

  const onEditPasswordClicked = () => {
    try {
      setEditRequestStatus("pending");
      dispatch(editPassword(editedPassword)).unwrap();
      setEditedPassword(INIT_NEWPASSWORD);
    } catch (err) {
      console.error("Failed to edit the password", err);
    } finally {
      setEditRequestStatus("idle");
    }
  };

  const ActionButton = (
    <Button
      variant="contained"
      className="justify-self-end py-2"
      disabled={!canEditPassword}
      onClick={() => {
        onEditPasswordClicked();
        setShowEditDialog(false);
      }}
    >
      Update
    </Button>
  );

  return (
    <SDialog
      isOpen={showEditDialog}
      setIsOpen={setShowEditDialog}
      actionButton={ActionButton}
    >
      <PasswordForm data={editedPassword} setData={setEditedPassword} />
    </SDialog>
  );
}
