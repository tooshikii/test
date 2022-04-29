import { Box, Typography } from "@mui/material";
import React from "react";
import StyleComp from "../../components/Style";

interface InnovateProps {}

const Innovate: React.ComponentType<InnovateProps> = (props: InnovateProps) => {
  return (
    <StyleComp>
      <Box>
        <Typography variant={"h1"}>INNOVATE</Typography>
        <Typography variant={"body1"}>Coming soon</Typography>
      </Box>
    </StyleComp>
  );
};

export default Innovate;
