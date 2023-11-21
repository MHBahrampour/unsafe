import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/_hooks/reduxHooks";
import { Passwords } from "@/app/_types/commonTypes";
import { ButtonBase, Typography, useMediaQuery, useTheme } from "@mui/material";
import { updateSelecetedId } from "./passwordsSlice";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";
import { PiKey } from "react-icons/pi";
import SDialog from "@/app/_components/ui/SDialog";
import PasswordDetail from "./PasswordDetail";

interface PasswordCardProps {
  password: Passwords;
}

export default function PasswordExcerpt({ password }: PasswordCardProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const { selectedPassword } = useGetPasswords();

  const [isSelected, setIsSelected] = useState(false);
  const [showDetailDialog, setShowDetailDialog] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onExcerptClicked = (id: number) => {
    dispatch(updateSelecetedId(id));
    isMobile && setShowDetailDialog(true);
  };

  useEffect(() => {
    selectedPassword?.id === password.id
      ? setIsSelected(true)
      : setIsSelected(false);
  }, [selectedPassword, password]);

  return (
    <>
      <ButtonBase
        component="div"
        className="grid grid-cols-[auto_1fr] items-center gap-3 py-2 rounded-2xl"
        onClick={() => onExcerptClicked(password.id!)}
      >
        <div
          className={`w-[48px] h-[48px] rounded-2xl grid place-items-center ${
            isSelected && !isMobile
              ? "bg-primary-main text-common-black"
              : "bg-common-semiBlack"
          }`}
        >
          <PiKey className="text-2xl" />
        </div>

        <div>
          <Typography variant="body1" className="!font-bold">
            {password.title}
          </Typography>
          <Typography variant="body2" className="text-common-white/70">
            {password.username}
          </Typography>
        </div>
      </ButtonBase>

      <SDialog isOpen={showDetailDialog} setIsOpen={setShowDetailDialog}>
        <PasswordDetail />
      </SDialog>
    </>
  );
}
