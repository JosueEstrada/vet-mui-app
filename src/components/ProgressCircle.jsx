import { Box } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${"#f2f2f0"} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${"#6870fa"} ${angle}deg 360deg),
            ${"#4cceac"}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
