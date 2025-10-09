import { Box } from "@mui/material";
import { BtnExit, TheUser } from "../../../features/header";

export const Header = () => {
  return (
    <Box component="header" sx={{ paddingTop: "24px" }}>
      <Box
        sx={{
          height: "40px",
          display: "flex",
          gap: "16px",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TheUser />
        <BtnExit />
      </Box>
    </Box>
  );
};
