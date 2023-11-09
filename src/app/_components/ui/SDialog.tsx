import { ReactElement, ReactNode, SetStateAction, forwardRef } from "react";
import {
  Slide,
  useMediaQuery,
  useTheme,
  Dialog,
  Button,
  IconButton,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { FaCircleXmark } from "react-icons/fa6";

interface SDialogProps {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
  buttonValue: string;
  buttonDisabled: boolean;
  buttonFunction: () => void;
  children: ReactNode;
}

export default function SDialog({
  isOpen,
  setIsOpen,
  buttonValue,
  buttonDisabled,
  buttonFunction,
  children,
}: SDialogProps) {
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCloseDialog = () => setIsOpen(false);

  const onActionButtonClicked = async () => {
    buttonFunction();
    handleCloseDialog();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseDialog}
      scroll="paper"
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      className="sm:[&_.MuiDialog-paper]:rounded-2xl sm:[&_.MuiDialog-paper]:w-[480px] [&_.MuiDialogContent-root]:p-6 [&_.MuiDialog-paper]:p-6"
    >
      {/* Header */}
      <div className="grid grid-cols-2 items-center mb-6">
        <IconButton
          edge="start"
          className="justify-self-start"
          onClick={handleCloseDialog}
        >
          <FaCircleXmark className="text-3xl text-gray-600" />
        </IconButton>

        <Button
          disabled={!buttonDisabled}
          variant="contained"
          className="justify-self-end"
          onClick={onActionButtonClicked}
        >
          {buttonValue}
        </Button>
      </div>

      {/* Content */}
      {children}
    </Dialog>
  );
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
