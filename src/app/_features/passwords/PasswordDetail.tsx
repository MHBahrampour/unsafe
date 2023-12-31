"use client";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";
import { Divider, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import EditPassword from "./EditPassword";
import DeletePassword from "./DeletePassword";
import { BsPerson, BsKey } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";

export default function PasswordDetail() {
  const { selectedPassword } = useGetPasswords();

  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const toggleEditDialog = () => setShowEditDialog((prevState) => !prevState);

  const toggleDeleteDialog = () =>
    setShowDeleteDialog((prevState) => !prevState);

  return (
    selectedPassword && (
      <>
        <div className="flex flex-col gap-4 bg-common-semiBlack px-6 rounded-2xl h-full">
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto] items-center min-h-[64px]">
            <Typography variant="h4" className="font-semibold">
              {selectedPassword.title}
            </Typography>

            <div className="grid grid-cols-2 gap-2">
              <IconButton
                onClick={toggleEditDialog}
                className="rounded-2xl bg-common-black"
              >
                <FiEdit3 className="text-2xl font-black text-common-white" />
              </IconButton>
              <IconButton
                onClick={toggleDeleteDialog}
                className="rounded-2xl bg-common-black hover:bg-secondary-main"
              >
                <FiTrash2 className="text-2xl font-black text-common-white" />
              </IconButton>
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-4">
            <div className="border-2 border-solid border-common-black rounded-2xl">
              {/* Username */}
              <div className="grid grid-cols-[auto_1fr] gap-3 p-3">
                <div className="w-[48px] h-[48px] rounded-2xl grid place-items-center">
                  <BsPerson className="text-2xl" />
                </div>

                <div className="grid gap-1">
                  <Typography variant="body2" className="text-common-white/70">
                    Username
                  </Typography>
                  <Typography variant="body1" className="font-semibold">
                    {selectedPassword.username}
                  </Typography>
                </div>
              </div>

              <Divider className="border-b-2 border-common-black" />

              {/* Password */}
              <div className="grid grid-cols-[auto_1fr] gap-3 p-3">
                <div className="w-[48px] h-[48px] rounded-2xl grid place-items-center">
                  <BsKey className="text-2xl" />
                </div>

                <div className="grid gap-1">
                  <Typography variant="body2" className="text-common-white/70">
                    Password
                  </Typography>
                  <Typography variant="body1" className="font-semibold">
                    {selectedPassword.password}
                  </Typography>
                </div>
              </div>
            </div>

            {/* Login URL */}
            <div className="border-2 border-solid border-common-black rounded-2xl">
              <div className="grid grid-cols-[auto_1fr] gap-3 p-3">
                <div className="w-[48px] h-[48px] rounded-2xl grid place-items-center">
                  <IoEarthOutline className="text-2xl" />
                </div>

                <div className="grid gap-1">
                  <Typography variant="body2" className="text-common-white/70">
                    Login URL
                  </Typography>
                  <Typography variant="body1" className="font-semibold">
                    {selectedPassword.loginUrl}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EditPassword
          showEditDialog={showEditDialog}
          setShowEditDialog={setShowEditDialog}
          currentPassword={selectedPassword}
        />

        <DeletePassword
          showDeleteDialog={showDeleteDialog}
          setShowDeleteDialog={setShowDeleteDialog}
          currentPassword={selectedPassword}
        />
      </>
    )
  );
}
