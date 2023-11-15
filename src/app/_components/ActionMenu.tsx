"use client";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import AddPassword from "../_features/passwords/AddPassword";
import { FiPlus } from "react-icons/fi";

export default function ActionMenu() {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const toggleAddDialog = () => setShowAddDialog((prevState) => !prevState);

  return (
    <>
      <div className="grid grid-cols-[1fr_auto] items-center h-16 bg-common-semiBlack rounded-2xl px-6">
        <Typography variant="h4" className="text-primary-main">
          <span className="text-secondary-main">Un</span>Safe
        </Typography>
        <IconButton
          onClick={toggleAddDialog}
          className="rounded-2xl bg-common-black"
        >
          <FiPlus className="text-2xl text-common-white" />
        </IconButton>
      </div>

      <AddPassword
        showAddDialog={showAddDialog}
        setShowAddDialog={setShowAddDialog}
      />
    </>
  );
}
