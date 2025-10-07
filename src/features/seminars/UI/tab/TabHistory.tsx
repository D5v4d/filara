import { Box, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { addSeminar } from "../../css/BtnAdd";
import { BtnAdd } from "../BtnAdd";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { DeleyBtn } from "../DeletBtn";
import { LikesBtn } from "../LikesBtn";

export const TabHistory = () => {
  const { heading, table, limitStart, limitEnd } = useSelector((state: RootState) => state.seminars);

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
              {heading.history.map((item: string, index) => (
                <TableCell key={index} sx={{ padding: "24px 8px", color: "#737680", width: index === 0 ? "661px" : "135px" }}>
                  {item}
                </TableCell>
              ))}
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.slice(limitStart, limitEnd).map((e, index) => (
              <TableRow key={index}>
                <TableCell width="48px" sx={{ padding: "26px 16px" }}>
                  <Checkbox sx={{ p: "0px" }} />
                </TableCell>
                <TableCell width="661px" sx={{ padding: "24px 8px", color: "#434652" }}>
                  <Typography>{e.title}</Typography>
                </TableCell>
                <TableCell width="135px" sx={{ padding: "24px 8px", color: "#434652" }}>
                  {e.date}
                </TableCell>
                <TableCell width="75px" sx={{ padding: "24px 8px", color: "#434652" }}>
                  <Box sx={{ display: "flex", gap: "12px", alignItems: "center", height: "16px" }}>
                    <LikesBtn id={e.id} />
                    <Typography>{e.likes ? e.likes : 0}</Typography>
                  </Box>
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
