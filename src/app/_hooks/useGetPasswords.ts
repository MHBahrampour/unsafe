import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  fetchPasswords,
  getAllPasswords,
  getPasswordsStatus,
  getPasswordsError,
  getSelectedPassword,
} from "../_features/passwords/passwordsSlice";

export const useGetPasswords = () => {
  const dispatch = useAppDispatch();

  const passwords = useAppSelector(getAllPasswords);
  const passwordsStatus = useAppSelector(getPasswordsStatus);
  const passwordsError = useAppSelector(getPasswordsError);
  const selectedPassword = useAppSelector(getSelectedPassword);

  useEffect(() => {
    if (passwordsStatus === "idle") {
      dispatch(fetchPasswords());
    }
  }, [passwordsStatus, dispatch]);

  return { passwords, passwordsStatus, passwordsError, selectedPassword };
};
