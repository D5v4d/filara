import { ListItemButton, ListItemText } from "@mui/material";
import type { IItemBtn } from "../types/ItemBtn";

export const ItemBtn = ({ imgUrl, text, isActive, onClick }: IItemBtn) => {
  return (
    <ListItemButton
      onClick={onClick}
      sx={{
        paddingY: "16px",
        paddingLeft: "16px",
        display: "flex",
        gap: "16px",
        height: "56px",
        backgroundColor: isActive ? "#C06ECC" : "",
        borderRadius: isActive ? "8px" : "",
      }}
    >
      <img src={imgUrl} alt={text} style={{ filter: isActive ? "brightness(0) invert(1)" : "" }} />
      <ListItemText primary={text} sx={{ lineHeight: "20px", fontWeight: "medium", color: isActive ? "#ffffffff" : "" }} />
    </ListItemButton>
  );
};
