import { Box } from "@mui/material";
import MyCalendar from "../components/MyCalendar.jsx";

export default function Agenda() {
  return (
    <>
      <Box>
        <MyCalendar className="my-calendar" />
      </Box>
    </>
  );
}
