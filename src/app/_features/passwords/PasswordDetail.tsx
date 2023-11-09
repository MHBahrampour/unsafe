"use client";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import EditPassword from "./EditPassword";
import { useAppDispatch } from "@/app/_hooks/reduxHooks";
import DeletePassword from "./DeletePassword";

export default function PasswordDetail() {
  const dispatch = useAppDispatch();

  const { selectedPassword: password } = useGetPasswords();

  const [showEditDialog, setShowEditDialog] = useState(false);
  const toggleEditDialog = () => setShowEditDialog((prevState) => !prevState);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const toggleDeleteDialog = () =>
    setShowDeleteDialog((prevState) => !prevState);

  return (
    password && (
      <>
        <div className="grid gap-4">
          <div className="grid grid-cols-[1fr_auto] items-center">
            <Typography variant="h4" className="font-bold">
              {password.title}
            </Typography>

            <div className="grid grid-cols-2 gap-2">
              <IconButton
                className="text-gray-600 text-2xl"
                onClick={toggleEditDialog}
              >
                <FiEdit3 />
              </IconButton>
              <IconButton
                className="text-gray-600 text-2xl"
                onClick={toggleDeleteDialog}
              >
                <FiTrash2 />
              </IconButton>
            </div>
          </div>

          <Typography variant="body1" className="text-gray-600">
            Username: {password.username}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            LoginUrl: {password.loginUrl}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Password: {password.password}
          </Typography>
        </div>

        <EditPassword
          showEditDialog={showEditDialog}
          setShowEditDialog={setShowEditDialog}
          currentPassword={password}
        />

        <DeletePassword
          showDeleteDialog={showDeleteDialog}
          setShowDeleteDialog={setShowDeleteDialog}
          currentPassword={password}
        />
      </>
    )
  );
}
