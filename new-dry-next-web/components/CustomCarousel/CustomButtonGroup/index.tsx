import React from "react";
import ArrowBackIosIcon from "../../../public/icons/chevron-left.svg";
import ArrowForwardIosIcon from "../../../public/icons/chevron-right.svg";

type CustomButtonGroupProps = any;

const CustomButtonGroup: React.ComponentType<CustomButtonGroupProps> = ({
  next,
  previous,
  goToSlide,
  carouselState,
}: CustomButtonGroupProps) => {
  const { currentSlide } = carouselState;

  return (
    <div className={"pb-2 absolute right-0 bottom-0  text-white"}>
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <ArrowBackIosIcon />
      </button>
      <button onClick={() => next()}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};
export default CustomButtonGroup;
