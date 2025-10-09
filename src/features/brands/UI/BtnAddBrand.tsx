import { ButtonBase } from "@mui/material";

export const BtnAddBrand = () => {
  return (
    <ButtonBase
      type="submit"
      sx={{ width: "100%", height: "40px", bgcolor: "#C06ECC", borderRadius: "8px", color: "#fff", fontSize: "16px", fontWeight: 500 }}
    >
      Добавить бренд
    </ButtonBase>
  );
};
