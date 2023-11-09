"use client";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import AddPassword from "../_features/passwords/AddPassword";

export default function ActionMenu() {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const toggleAddDialog = () => setShowAddDialog((prevState) => !prevState);

  return (
    <>
      <div className="grid grid-cols-[1fr_auto] items-center bg-gray-300 rounded-xl px-4 py-2">
        <Typography variant="h5" className="font-bold">
          TinyPass
        </Typography>
        <IconButton onClick={toggleAddDialog}>
          <BsFillPlusCircleFill className="text-3xl text-gray-600" />
        </IconButton>
      </div>

      <AddPassword
        showAddDialog={showAddDialog}
        setShowAddDialog={setShowAddDialog}
      />
    </>
  );
}
