import { IconButton, Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

type CustomButtonGroupProps = any;

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    buttonsContainer: {
      position: "absolute",
      right: 0,
      bottom: 0,
      color: "white",
    },
  })
);

// https://github.com/YIZHUANG/react-multi-carousel/blob/master/stories/CustomArrows.js
const CustomButtonGroup: React.ComponentType<CustomButtonGroupProps> = ({
  next,
  previous,
  goToSlide,
  carouselState,
}: CustomButtonGroupProps) => {
  const classes = useStyle();

  const { currentSlide } = carouselState;

  return (
    <div className={classes.buttonsContainer}>
      <IconButton
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
        size="large">
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={() => next()} size="large">
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};
export default CustomButtonGroup;
