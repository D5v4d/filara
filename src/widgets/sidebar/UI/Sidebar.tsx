import { Drawer } from "@mui/material";
import { ListItemBtn } from "../../../features/sidebar";
import { cssDrawer } from "../css/CssSidebar";

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
      <img src="/logo.svg" width={114} height={61} alt="logo" />
      <ListItemBtn />
    </Drawer>
  );
};
