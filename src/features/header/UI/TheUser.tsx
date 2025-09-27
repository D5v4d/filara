import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../header/store/store";

export const TheUser = () => {
  const emailUser = useSelector((state: RootState) => state.authUser.user.email);

  return <Typography>{emailUser}</Typography>;
};
