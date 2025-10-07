import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Pagination } from "../..";
import { TabApplications } from "./TabApplications";
import { TabHistory } from "./TabHistory";
import { TabUpcoming } from "./TabUpcoming";
import { useDispatch } from "react-redux";
import { getSeminars, getUsers, upTable } from "../../slice/seminarsSlice";
import { useGetSeminarsQuery, useGetUsersQuery } from "../../api/dataSidebar";
import { EditingAndAdding } from "../EditingAndAdding";

export const TabContent = () => {
  const { data: seminars } = useGetSeminarsQuery('');
  const { data: users } = useGetUsersQuery('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeminars({ seminars }));
    dispatch(getUsers({ users }));
  }, [dispatch, seminars, users]);

  const [value, setValue] = useState('future');

  useEffect(() => {
    if (seminars?.length && users?.length) {
      dispatch(upTable(value));
    }
  }, [value, seminars, users, dispatch]);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabSx = {
    color: "#737680",
    px: "4px",
    borderBottom: "2px solid transparent",
    textTransform: "none",
    "&.Mui-selected": {
      color: "#37393D",
      borderBottom: "2px solid #C06ECC",
    },
  };

  return (
    <TabContext value={value}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <TabList
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#C06ECC",
            },
            "& .MuiTab-root": {
              color: "#737680", // цвет текста по умолчанию
              "&.Mui-selected": {
                color: "#37393D", // цвет текста когда таб выбран
              },
            },
          }}
        >
          <Tab label="Будущие" value='future' sx={tabSx} />
          <Tab label="История" value="history" sx={tabSx} />
          <Tab label="Заявки на семинар" value="application" sx={tabSx} />
        </TabList>
        <Pagination />
      </Box>
      <TabPanel sx={{ p: "0px" }} value='future'>
        <TabUpcoming />
      </TabPanel>
      <TabPanel sx={{ p: "0px" }} value="history">
        <TabHistory />
      </TabPanel>
      <TabPanel sx={{ p: "0px" }} value="application">
        <TabApplications />
      </TabPanel>
      <EditingAndAdding />
    </TabContext>
  );
};
