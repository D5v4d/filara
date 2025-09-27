import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

export const BtnExit = () => {
  const navigate = useNavigate();
  const exitUser = () => {
    localStorage.removeItem("accountstoken");
    localStorage.removeItem("user");
    navigate("/Authorization");
  };
  return (
    <IconButton onClick={exitUser} sx={{ borderRadius: 0, width: "40px", height: "40px", backgroundColor: "#EBECEF" }}>
      <img src="/exit.svg" alt="exit" />
    </IconButton>
  );
};
