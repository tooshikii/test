import { Button, Theme, Typography } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import React from "react";
import { sanitizeHtml } from "../../utils/strUtils";

interface ProgramTileProps {
  title: string;
  onClick?: () => void;
  logo?: {
    url: string;
  };
  text?: string;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    infoContainer: {
      backgroundColor: "#dfdfdf",
      padding: theme.spacing(4),
      marginBottom: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      "& > p:first-child": {
        fontSize: "19px",
        textTransform: "uppercase",
      },
      "& > p:nth-child(2)": {
        lineHeight: "24px",
        margin: `${theme.spacing(2)} 0px`,
      },
    },
  })
);

const ProgramTile: React.ComponentType<ProgramTileProps> = ({
  title,
  text,
  onClick,
}: ProgramTileProps) => {
  const classes = useStyle();

  return (
    <div className={classes.infoContainer}>
      <Typography variant={"body1"}>{title}</Typography>
      {text && <Typography variant={"body2"}>{sanitizeHtml(text)}</Typography>}
      {/* // TODO : update type */}
      {onClick && (
        <Button onClick={() => onClick()} variant={"outlined"}>
          MORE INFO
        </Button>
      )}
    </div>
  );
};
export default ProgramTile;
