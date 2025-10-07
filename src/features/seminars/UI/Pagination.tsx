import { Box, ButtonBase, MenuItem, Select, Typography, type SelectChangeEvent } from "@mui/material";
import { select } from "../css/Select";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { upLimit, upPage } from "../slice/seminarsSlice";
import type { ChangeEvent } from "react";

export const Pagination = () => {
  const { limit, page, pageLimit } = useSelector((state: RootState) => state.seminars);
  const dispatch = useDispatch();

  const limitChange = (e: SelectChangeEvent<number>) => {
    const value = e.target.value;
    dispatch(upLimit(value));
  };
  const pageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (Number(value) > pageLimit || Number(value) < 0 ) return;
    dispatch(upPage(value));
  };

  const forwardPage = () => {
    dispatch(upPage(Number(page) + 1));
  };

  const backPage = () => {
    dispatch(upPage(Number(page) - 1));
  };

  return (
    <Box display="flex" height="32px" gap="16px">
      <Box display="flex" gap="8px" alignItems="center">
        <Typography sx={{ color: "#434652", fontSize: "14px" }}>Показывать</Typography>
        <Select sx={select} value={limit} onChange={limitChange}>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </Box>
      <Box display="flex" gap="8px" alignItems="center">
        <Typography sx={{ color: "#434652", fontSize: "14px" }}>Страница</Typography>
        <Box
          component="input"
          type="number"
          value={page}
          onChange={pageChange}
          sx={{
            width: "28px",
            paddingY: "6px",
            border: "1px solid #D8DAE0",
            borderRadius: "6px",
            outline: "none",
            backgroundColor: "white",
            textAlign: "center",
            "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
          }}
        />
        <Typography sx={{ color: "#BCBFCC" }}>из {pageLimit}</Typography>
      </Box>
      <Box sx={{ border: "1px solid #D0D3DA", borderRadius: "4px" }}>
        <ButtonBase
          disabled={page <= 1}
          onClick={backPage}
          sx={{ width: "32px", p: "7px", borderRight: "1px solid #D0D3DA", bgcolor: page <= 1 ? "#F8F8FA" : "" }}
        >
          <img src="/arrow-left.svg" alt="left" />
        </ButtonBase>
        <ButtonBase
          disabled={page === pageLimit}
          onClick={forwardPage}
          sx={{ width: "32px", p: "7px", bgcolor: page === pageLimit ? "#F8F8FA" : "" }}
        >
          <img src="/arrow-right.svg" alt="right" />
        </ButtonBase>
      </Box>
    </Box>
  );
};
