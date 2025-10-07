import { ButtonBase } from "@mui/material";
import { upModalWindow } from "../slice/seminarsSlice";
import { useDispatch } from "react-redux";

export const BtnAdd = ({ text, style }: { text: string; style: object }) => {
  const dispatch = useDispatch();

  return (
    <ButtonBase onClick={() => dispatch(upModalWindow({ isOpen: true }))} sx={style}>
      {text}
    </ButtonBase>
  );
};
