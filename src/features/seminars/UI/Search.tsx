import { Box, Button, InputBase } from "@mui/material";
import { btn, input, searchBox } from "../css/Search";
import { useDispatch } from "react-redux";
import { setSearch } from "../slice/seminarsSlice";

export const Search = () => {
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearch(value)); // используем новый редьюсер
  };

  return (
    <Box display="flex" justifyContent="end" width="100%">
      <Box sx={searchBox}>
        <img src="/seminar/searsh.svg" alt="searsh" />
        <InputBase onChange={onChange} sx={input} placeholder="Поиск по семинарам"></InputBase>
        <Button sx={btn}>
          <img src="/seminar/cross.svg" alt="cross" />
        </Button>
      </Box>
    </Box>
  );
};
