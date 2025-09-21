// components/CustomSnackbar.tsx
import { Snackbar } from "@mui/material";

interface CustomSnackbarProps {
  open: boolean;
  message: string;
  severity: string;
  autoHideDuration?: number;
  onClose: () => void;
}

function CustomSnackbar({ open, message, severity, autoHideDuration = 3000, onClose }: CustomSnackbarProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      message={message}
      slotProps={{
        content: {
          sx: {
            backgroundColor: severity === "success" ? "#4caf50" : "#f44336",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        },
      }}
    />
  );
}

export default CustomSnackbar;
