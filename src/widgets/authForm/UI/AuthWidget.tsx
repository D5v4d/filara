import { Container } from "@mui/material";
import { Logo } from "../../../shared";
import { Form } from "../../../features/authForm";

export const AuthWidget = () => {
  
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "69px", gap: "72px" }}>
      <Logo width= "274px" height= "206px"/>
      <Form/>
    </Container>
  );
};
