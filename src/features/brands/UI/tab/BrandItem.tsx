import { Box, IconButton, TableCell } from "@mui/material";
import type { Ibrand } from "../../types/brands";
import brandsStore from '../../mobX/mobx'

export const BrandItem = ({brand}: {brand: Ibrand}) => {
  const {brandID, deleteBrand} = brandsStore

  return (
    <>
      <TableCell width="165px" sx={{ padding: "10px 8px", color: "#434652" }}>
        <img src={brand.icon} alt="brand-imgs" style={{ width: 110, height: 110 }} />
      </TableCell>
      <TableCell width="649px" sx={{ padding: "10px 8px", color: "#434652" }}>
        {brand.name}
      </TableCell>
      <TableCell width="145px" sx={{ color: "#434652", p: "0px" }}>
        <Box sx={{ display: "flex", gap: "32px", justifyContent: "end", paddingRight: "12px" }}>
          <IconButton onClick={() => brandID(brand.id)}>
            <img src="/brand/editing.svg" alt="editing" />
          </IconButton>
          <IconButton onClick={() => deleteBrand(brand.id)}>
            <img src="/trashcan.svg" alt="trashcan" />
          </IconButton>
        </Box>
      </TableCell>
    </>
  );
};
