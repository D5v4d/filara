import { BtnAdd } from "../BtnAdd";
import { addSeminar } from "../../css/BtnAdd";
import type { RootState } from "../../../store/store";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, Checkbox, TableBody, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DeleyBtn } from "../DeletBtn";
import { upModalWindow } from "../../slice/seminarsSlice";

export const TabUpcoming = () => {
  const { heading, table, limitStart, limitEnd } = useSelector((state: RootState) => state.seminars);
  const dispatch = useDispatch();

  return (
    <>
      <BtnAdd text="Добавить семинар" style={addSeminar} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#F8F8FA" }}>
              <TableCell sx={{ padding: "26px 16px" }}>
                <Checkbox sx={{ p: "0px" }} />
              </TableCell>
              {heading.future.map((item: string, index) => (
                <TableCell key={index} sx={{ padding: "24px 8px", color: "#737680" }}>
                  {item}
                </TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.slice(limitStart, limitEnd).map((e, index) => (
              <TableRow key={index}>
                <TableCell width="48px" sx={{ padding: "26px 16px" }}>
                  <Checkbox sx={{ p: "0px" }} />
                </TableCell>
                <TableCell onClick={() => dispatch(upModalWindow({isOpen: true, data: e}))} width="448px" sx={{ padding: "24px 8px", color: "#434652" }}>
                  <Typography>{e.title}</Typography>
                </TableCell>
                <TableCell width="256px" sx={{ padding: "24px 8px", color: "#434652" }}>
                  {e.fullName}
                </TableCell>
                <TableCell width="119px" sx={{ padding: "24px 8px", color: "#434652" }}>
                  <Typography>{e.date}</Typography>
                </TableCell>
                <TableCell width="40px">
                  <DeleyBtn id={e.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
