import { Link as MaterialLink, Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    colorPrimary: {
      color: "inherit",
    },
  })
);

const Link: React.ComponentType<LinkProps> = ({
  children,
  onClick,
  ...others
}) => {
  const classes = useStyles();

  return (
    <span className={classes.link}>
      <NextLink {...others}>
        <MaterialLink onClick={onClick} className={classes.colorPrimary}>
          {children}
        </MaterialLink>
      </NextLink>
    </span>
  );
};

export default Link;
