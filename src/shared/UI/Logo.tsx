import { Box} from "@mui/material";
import type { Ilogo } from "../types/logo";

export const Logo = ({width, height}: Ilogo) => {
  return <Box component="img" src="/logo.svg" alt="Логотип компании" sx={{ width, height, cursor: "pointer" }} />;
};
