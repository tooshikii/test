import { Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import React from "react";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";

interface ComingSoonProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: `calc(100vh - ${50}px)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

const ComingSoon: React.ComponentType<ComingSoonProps> = (
  props: ComingSoonProps
) => {
  const classes = useStyle();
  return (
    <StyleComp>
      <div className={classes.container}>
        <TitleWithOrnament>COMING SOON</TitleWithOrnament>
      </div>
    </StyleComp>
  );
};

export default ComingSoon;
