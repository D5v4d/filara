import { Table, TableBody, TableCell, TableRow, TableHead } from "@mui/material";
import brandsStore from "../../mobX/mobx";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { BrandItem } from "./BrandItem";
import { BrandEdit } from "./BrandEdit";

export const TabBrands = observer(() => {
  const { getBrands, brands, BrandId } = brandsStore;

  useEffect(() => {
    getBrands();
  }, [getBrands]);

  return (
    <Table>
      <TableHead>
        <TableRow sx={{ bgcolor: "#F8F8FA" }}>
          <TableCell sx={{ padding: "10px 8px", color: "#737680" }}>Логотип бренда</TableCell>
          <TableCell sx={{ padding: "10px 8px", color: "#737680" }}>Название бренда</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {brands.map((brand) => (
          <TableRow key={brand.id}>{BrandId !== brand.id ? <BrandItem brand={brand} /> : <BrandEdit brand={brand} />}</TableRow>
        ))}
      </TableBody>
    </Table>
  );
});
