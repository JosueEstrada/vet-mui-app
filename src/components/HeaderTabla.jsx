import { Typography, Box } from "@mui/material";

const HeaderTabla = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h3"
        color={"grey"}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography align={"left"} variant="h5" color={"black"}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default HeaderTabla;
