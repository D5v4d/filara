import { Box, IconButton, InputBase, TableCell } from "@mui/material";
import { useFileField } from "../../hooks/useFileField";
import type { Ibrand } from "../../types/brands";
import brandsStore from "../../mobX/mobx";
import { useState } from "react";

export const BrandEdit = ({ brand }: { brand: Ibrand }) => {
  const { fileData, handleFileChange } = useFileField();
  const [editedName, setEditedName] = useState(brand.name);
  const { brandID, editBrand } = brandsStore;

  
  return (
    <>
      <TableCell width="165px" sx={{ padding: "10px 8px", color: "#434652" }}>
        <label htmlFor={`file-edit`}>
          <Box
            sx={{
              backgroundColor: "#FAFAFA",
              cursor: "pointer",
              height: "110px",
              width: "110px",
            }}
          >
            {fileData ? (
              <img src={fileData} alt="img-brand" style={{ width: "110px", height: "110px" }} />
            ) : (
              <img src="/brand/download.svg" alt="download" style={{ margin: "37px" }} />
            )}
            <input id={`file-edit`} type="file" accept=".png,.jpg,.jpeg" hidden onChange={handleFileChange} />
          </Box>
        </label>
      </TableCell>
      <TableCell width="649px" sx={{ padding: "10px 8px", color: "#434652" }}>
        <InputBase
          sx={{
            lineHeight: "20px",
            border: "1px solid #D0D3DA",
            borderRadius: "8px",
            height: "40px",
            width: "314px",
            p: "10px 12px",
          }}
          onChange={(e) => setEditedName(e.target.value)}
          type={"name"}
          value={editedName}
        />
      </TableCell>
      <TableCell width="145px" sx={{ color: "#434652", p: "0px" }}>
        <Box sx={{ display: "flex", gap: "32px", justifyContent: "end", paddingRight: "12px" }}>
          <IconButton onClick={() => brandID("")}>
            <img src="/brand/cancellation.svg" alt="editing" />
          </IconButton>
          <IconButton onClick={() => editBrand(editedName, fileData)}>
            <img src="/brand/save.svg" alt="trashcan" />
          </IconButton>
        </Box>
      </TableCell>
    </>
  );
};
