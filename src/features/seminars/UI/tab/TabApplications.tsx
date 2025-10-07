import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

export const TabApplications = () => {
  const { heading, table, limitStart, limitEnd } = useSelector((state: RootState) => state.seminars);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#F8F8FA" }}>
              {heading.applications.map((item: string, index) => (
                <TableCell key={index} sx={{ padding: "24px 8px", color: "#737680" }}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              table.slice(limitStart, limitEnd).map((e, index) => (
                <TableRow key={index}>
                  <TableCell width="479px" sx={{ padding: "26px 16px", color: "#434652" }}>
                    {e.title}
                  </TableCell>
                  <TableCell width="220px" sx={{ padding: "24px 8px", color: "#434652" }}>
                    {e.fullName}
                  </TableCell>
                  <TableCell width="165px" sx={{ padding: "24px 8px", color: "#434652" }}>
                    {e.phone}
                  </TableCell>
                  <TableCell width="95px" sx={{ padding: "24px 8px", color: "#434652" }}>
                    {e.date}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
