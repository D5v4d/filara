import { Box } from "@mui/material";

import { Search, TabContent } from "../../../features/seminars";

export const Seminars = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Search></Search>
      <TabContent />
    </Box>
  );
};
