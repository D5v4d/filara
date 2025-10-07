import { IconButton } from "@mui/material";
import { useDeleteSeminarMutation } from "../api/dataSidebar";

export const DeleyBtn = ({ id }: { id: number }) => {
  const [deleteProduct] = useDeleteSeminarMutation();
  const delet = () => {
    deleteProduct(id).unwrap();
  };

  return (
    <IconButton onClick={delet} color="primary" aria-label="upload picture">
      <img src="/trashcan.svg" alt="trashcan" />
    </IconButton>
  );
};
