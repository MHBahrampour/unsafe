import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import {
  fetchPasswords,
  selectAllPasswords,
  getPasswordsStatus,
  getPasswordsError,
} from "../_features/passwords/passwordsSlice";

export const useGetPasswords = () => {
  const dispatch = useAppDispatch();

  const passwords = useAppSelector(selectAllPasswords);
  const passwordsStatus = useAppSelector(getPasswordsStatus);
  const passwordsError = useAppSelector(getPasswordsError);

  useEffect(() => {
    if (passwordsStatus === "idle") {
      dispatch(fetchPasswords());
    }
  }, [passwordsStatus, dispatch]);

  return { passwords, passwordsStatus, passwordsError };
};
