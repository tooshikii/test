import { Backdrop, Fade, IconButton, Theme, Typography } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useEffect, useState } from "react";
import Link from "../Link";
import SnsLinks from "../SnsLinks";
import { BackdropContext } from "./Context";
import snsData from "../../public/data/dry_sns_map.json";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      alignItems: "start",
      backgroundColor: "rgba(19,19,19,0.9)",
    },
    closeIcon: {
      position: "absolute",
      color: "#c3c3c3",
      top: 0,
      right: 0,
      padding: theme.spacing(2),
      "& svg": {
        width: "2em",
        height: "2em",
      },
    },
    menuContainer: {
      color: "#c3c3c3",
      margin: theme.spacing(8),
      marginLeft: "auto",
      padding: theme.spacing(4),
      "& > h4": {
        marginBottom: theme.spacing(1),
        "&:last-child": {
          marginBottom: theme.spacing(3),
        },
      },
      "& svg": {
        fill: "#c3c3c3",
      },
    },
    imprint: {
      fontSize: "10px",
      "&>*": {
        paddingRight: theme.spacing(2),
      },
    },
  })
);

interface LinkType {
  displayName: string;
  path: string;
}

const Links: Array<LinkType> = [
  {
    displayName: "ABOUT",
    path: "about-us",
  },
  {
    displayName: "EDUCATE",
    path: "educate",
  },
  {
    displayName: "CONTACT",
    path: "contact",
  },
];

const MenuBackdrop = () => {
  const classes = useStyle();
  const { isOpen, setIsOpen } = useContext(BackdropContext);
  const [fadeOpen, setFadeOpen] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setFadeOpen(isOpen);
    }, 200);

    return () => clearTimeout(id);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Backdrop open={isOpen} classes={{ root: classes.backdrop }}>
          <IconButton
            edge="start"
            aria-label="menu"
            size={"medium"}
            disableRipple={true}
            className={classes.closeIcon}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
          <Fade in={fadeOpen}>
            <div className={classes.menuContainer}>
              {Links.map((link) => (
                <Typography variant={"h4"}>
                  <Link href={`/${link.path}`} onClick={() => setIsOpen(false)}>
                    {link.displayName}
                  </Link>
                </Typography>
              ))}
              <SnsLinks SnsMap={snsData} />
              <div className={classes.imprint}>
                <Link href={`/imprint`} onClick={() => setIsOpen(false)}>
                  IMPRINT
                </Link>
                <Link
                  href={`/data-protection`}
                  onClick={() => setIsOpen(false)}
                >
                  DATA PROTECTION
                </Link>
              </div>
            </div>
          </Fade>
        </Backdrop>
      )}
    </>
  );
};

export default MenuBackdrop;
