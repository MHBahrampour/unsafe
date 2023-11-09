import { useAppDispatch } from "@/app/_hooks/reduxHooks";
import { Passwords } from "@/app/_types/commonTypes";
import { Typography } from "@mui/material";
import { updateSelecetedId } from "./passwordsSlice";
import { useGetPasswords } from "@/app/_hooks/useGetPasswords";
import { PiKey } from "react-icons/pi";

interface PasswordCardProps {
  password: Passwords;
}

export default function PasswordExcerpt({ password }: PasswordCardProps) {
  const dispatch = useAppDispatch();

  const onExcerptClicked = (id: number) => dispatch(updateSelecetedId(id));

  const { selectedPassword } = useGetPasswords();

  return (
    <div
      className="grid grid-cols-[auto_1fr] items-center gap-3 cursor-pointer"
      onClick={() => onExcerptClicked(password.id)}
    >
      <div className="w-[48px] h-[48px] bg-gray-300 rounded-2xl grid place-items-center">
        <PiKey className="text-2xl text-gray-600" />
      </div>

      <div>
        <Typography variant="body1" className="!font-bold">
          {password.title}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          {password.username}
        </Typography>
      </div>
    </div>
  );
}
