// hooks/useFileField.ts
import { useState, useCallback } from "react";

export const useFileField = () => { // хук который возврашает url файла, название файла, функцию для получения этих данных и функция очистки 
  const [fileName, setFileName] = useState<string>("");
  const [fileData, setFileData] = useState<string | null>(null);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      setFileName("");
      setFileData(null);
      return;
    }

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result as string;
      setFileData(result);
      setFileName(file.name);
    };

    reader.readAsDataURL(file);
  }, []);

  const resetFile = useCallback(() => {
    setFileName("");
    setFileData(null);
  }, []);

  return {
    fileName, // название файла 
    fileData, // путь файла
    handleFileChange, // функция получения названия и пути файла
    resetFile // очистка инпут файл
  };
};
