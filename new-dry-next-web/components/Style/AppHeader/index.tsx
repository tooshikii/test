import { AppBar, Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { useRouter } from "next/dist/client/router";
import React, { useContext } from "react";
import { BackdropContext } from "../../MenuBackdrop/Context";
import DryLogo from "./DryLogo";

interface AppHeaderProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageContainer: {
      display: "flex",
      justifyContent: "space-between",
      height: 50,
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      "&>.letter": {
        display: "flex",
        alignItems: "center",
        lineHeight: "9px",
        textAlign: "center",
        fontSize: "7px",
        color: "black",
        letterSpacing: 1,
      },
      "&>.burger": {
        cursor: "pointer",
        "&>img": {
          height: 30,
        },
      },
      [theme.breakpoints.down('lg')]: {
        "&>.letter": {
          display: "none",
        },
      },
      [theme.breakpoints.down('md')]: {
        "&>.ornament": {
          display: "none",
        },
      },
      [theme.breakpoints.down('sm')]: {
        "&>.ornament-xs": {
          display: "none",
        },
      },
    },
    barcodeLetter: {
      lineHeight: "11px",
      fontSize: "11px",
      color: "black",
      fontWeight: "bold",
      "&>span": {
        padding: `0px 5px`,
        "&:first-child, &:last-child": {
          paddingLeft: "0px",
        },
        "&:last-child": {
          paddingRight: "0px",
        },
      },
    },
    root: {
      boxShadow: "none",
      height: 50,
      background: theme.palette.background.default,
    },
  })
);

const AppHeader: React.ComponentType<AppHeaderProps> = () => {
  const classes = useStyles();
  const router = useRouter();
  const { setIsOpen } = useContext(BackdropContext);

  const openBackDrop = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AppBar
      classes={{
        root: classes.root,
      }}
    >
      <div className={classes.imageContainer}>
        <DryLogo onClick={() => router.push("/")} />
        {/* for some reasons that I don't understand, how SVG is load has been changed and breaks the display
        now we apply width specifically here   */}
        <img
          src="/icons/gradient_resized.svg"
          alt=""
          style={{ width: 180 }}
          className={"ornament"}
        />
        <img
          src="/icons/thorns_icon_resized.svg"
          alt=""
          style={{ width: 180 }}
          className={"ornament"}
        />
        <div className={`letter `}>
          <span>
            DRY / ALL RIGHTS <br />
            RESERVED ©2020 DRY
          </span>
        </div>
        <img
          src="/icons/globe_icon_resized.svg"
          style={{ width: 80 }}
          alt=""
          className={"ornament-xs"}
        />
        <div className={`letter `}>
          <span>
            CONTACT INFORMATION <br />
            INFO@DRY-AGENCY.COM
          </span>
        </div>
        <img
          src="/icons/WhiteNoiseDistortion_white_yh.png"
          alt=""
          className={"ornament"}
        />
        <div>
          <img src="/icons/barcode_resized.svg" alt="" />
          <div className={classes.barcodeLetter}>
            <span>
              <a href="/store">STORE</a>
            </span>
            <span>
              <a href="/about-us">ABOUT</a>
            </span>
            <span>
              <a href="/contact">CONTACT</a>
            </span>
          </div>
        </div>
        <div className={"burger"} onClick={openBackDrop}>
          <img src="/icons/burger_resized.svg" alt="" />
        </div>
      </div>
    </AppBar>
  );
};

export default AppHeader;
