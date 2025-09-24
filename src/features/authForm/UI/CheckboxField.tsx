import { Checkbox, Typography, Container } from "@mui/material";

export const CheckboxField = () => {
  return (
    <Container disableGutters sx={{ display: "flex", alignItems: "center", gap: "12px", height: "24px" }}>
      <Checkbox sx={{ width: "16px" }} />
      <Typography variant="h1" sx={{ fontSize: "16px", lineHeight: "24px" }}>
        Запомнить меня
      </Typography>
    </Container>
  );
};
