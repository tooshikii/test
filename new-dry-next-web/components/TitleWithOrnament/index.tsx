import { Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import React from "react";

interface TitleWithOrnamentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: React.ReactNode;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      position: "relative",
      fontSize: "53px",
      fontFamily: '"DRYCUSTOM"',
      // Ornament decoration
      "&::before": {
        content: `url(/icons/ornament_resized.svg)`,
        position: "absolute",
        width: "0.5em",
        top: "-35px",
      },
    },
  })
);

const TitleWithOrnament: React.ComponentType<TitleWithOrnamentProps> = ({
  children,
  className,
}: TitleWithOrnamentProps) => {
  const classes = useStyle();
  return (
    <span
      className={`relative text-6xl drop-shadow-2xl ${classes.title} ${className}`}
    >
      {children}
    </span>
  );
};
export default TitleWithOrnament;
