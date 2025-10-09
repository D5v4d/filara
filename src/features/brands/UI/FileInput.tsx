// FileInput.tsx
import { Box, IconButton, Typography } from "@mui/material";
import { useController } from "react-hook-form";
import { useFileField } from "../hooks/useFileField";
import { useEffect } from "react";

interface FileInputProps {
  name: string;
}

const FileInput = ({ name }: FileInputProps) => {
  const {
    // useController — это хук RHF, который связывает кастомный компонент с формой. Он даёт:
    // field.onChange — функция, чтобы сообщить форме, что значение изменилось.
    // field.value — текущее значение этого поля внутри формы (хранится в состоянии RHF).
    field: { onChange, value },
  } = useController({ name });

  const { fileName, fileData, handleFileChange, resetFile } = useFileField();

  // 1. Когда пользователь выбрал файл → отправить в форму
  useEffect(() => {
    if (fileData !== null) {
      onChange(fileData);  // Value файла равен fileData для того что бы его очистить нужно очитсть fileData в хуке
    } else {
      onChange("");
    }
  }, [fileData, onChange]);

  // 2. Когда форма сбросилась или значение изменилось
  useEffect(() => {
    if (value === "" || value == null) {
      resetFile();
    }
  }, [value, resetFile]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%" }}>
      <label htmlFor={`file-upload-input-${name}`}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #D0D0D0",
            borderRadius: "8px",
            padding: "12px 16px",
            backgroundColor: "#fff",
            height: "40px",
            "&:focus-within": {
              borderColor: "#7B4CFF",
              boxShadow: "0 0 0 2px rgba(123, 76, 255, 0.2)",
            },
            cursor: "pointer",
          }}
        >
          <input id={`file-upload-input-${name}`} type="file" accept=".png,.jpg,.jpeg" hidden onChange={handleFileChange} />

          <Typography
            sx={{
              color: "#757575",
              fontSize: "16px",
              flex: 1,
              userSelect: "none",
            }}
          >
            {fileName || "Загрузите логотип бренда"}
          </Typography>

          <IconButton component="span">
            <img src="/brand/paper-clip.svg" alt="paper-clip" />
          </IconButton>
        </Box>
      </label>

      <Typography
        variant="caption"
        sx={{
          color: "#757575",
          fontSize: "14px",
          fontWeight: 400,
        }}
      >
        Размер логотипа 500×500 px PNG, JPG, JPEG
      </Typography>
    </Box>
  );
};

export default FileInput;
