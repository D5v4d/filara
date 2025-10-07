import { Drawer } from "@mui/material";
import { ListItemBtn } from "../../../features/sidebar";
import { cssDrawer } from "../css/CssSidebar";
import { Logo } from "../../../shared";

export const Sidebar = () => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={true}
      slotProps={{
        paper: {
          component: "aside",
          sx: cssDrawer
        },
      }}
    >
      <Logo width="114px" height="61px"/>
      <ListItemBtn />
    </Drawer>
  );
};
