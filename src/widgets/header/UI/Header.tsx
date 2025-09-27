import { Box, Container } from "@mui/material";
import { BtnExit } from "../../../features/header";
import { TheUser } from "../../../features/header/UI/TheUser";

export const Header = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "flex-end", paddingTop: "24px" }}>
      <Box
        sx={{
          height: "40px",
          display: "flex",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <TheUser />
        <BtnExit />
      </Box>
    </Container>
  );
};
