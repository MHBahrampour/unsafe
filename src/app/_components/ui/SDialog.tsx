import { ReactElement, ReactNode, SetStateAction, forwardRef } from "react";
import {
  Slide,
  useMediaQuery,
  useTheme,
  Dialog,
  IconButton,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { MdClose } from "react-icons/md";

interface SDialogProps {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
  actionButton?: ReactNode;
  children: ReactNode;
}

export default function SDialog({
  isOpen,
  setIsOpen,
  actionButton,
  children,
}: SDialogProps) {
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCloseDialog = () => setIsOpen(false);

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseDialog}
      scroll="paper"
      fullScreen={fullScreen}
      TransitionComponent={Transition}
      className="sm:[&_.MuiDialog-paper]:rounded-2xl sm:[&_.MuiDialog-paper]:w-[480px] [&_.MuiDialogContent-root]:p-6 [&_.MuiDialog-paper]:p-6 [&_.MuiDialog-paper]:bg-none"
    >
      {/* Header */}
      <div className="grid grid-cols-2 items-center mb-6">
        <IconButton
          onClick={handleCloseDialog}
          className="justify-self-start rounded-2xl bg-common-semiBlack"
        >
          <MdClose className="text-2xl text-common-white" />
        </IconButton>

        {actionButton}
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
