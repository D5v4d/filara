import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { addAccounts } from "../slice/userSlice";

export const TheUser = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const dispatch = useDispatch()
  dispatch(addAccounts(user))

  const emailUser = useSelector((state: RootState) => state.authUser.user.email);

  return <Typography>{emailUser}</Typography>;
};
