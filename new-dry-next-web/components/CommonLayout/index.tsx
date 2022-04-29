import { Container, Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import React from "react";
import NextImage from "next/image";
import { myLoader } from "../Image";

interface CommonLayoutProps {
  videoSrc?: string;
  assetSrc?: string;
  menuSection?: React.ReactNode;
  contentSection: React.ReactNode;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      "&>div:nth-child(1)": {
        flexGrow: 1,
        flexBasis: "30%",
      },
      "&>div:nth-child(2)": {
        flexGrow: 2,
        flexBasis: "70%",
        "&>*:first-child": {
          marginTop: 0,
        },
      },
      [theme.breakpoints.down('md')]: {
        flexFlow: "column",
        // Resize every injected images in content area so that it doesn't break the box
        "& > .content img": {
          width: "100%",
        },
      },
    },
  })
);

const CommonLayout: React.ComponentType<CommonLayoutProps> = ({
  assetSrc,
  menuSection,
  contentSection,
  videoSrc,
}: CommonLayoutProps) => {
  const classes = useStyle();
  return (
    <div>
      {videoSrc && (
        <video
          controls={false}
          autoPlay
          loop
          muted
          poster={"/icons/dry_logo_resized.svg"}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {!videoSrc && assetSrc && (
        <div className={`w-full relative`} style={{ height: 450 }}>
          <NextImage
            loader={myLoader}
            src={assetSrc}
            className={`animate-blur-in duration-2000 object-cover rounded-br-3xl`}
            layout="fill"
          />
        </div>
      )}
      <Container>
        <div className={`${classes.container} my-6 flex`}>
          <div>{menuSection}</div>
          <div className={"content"}>{contentSection}</div>
        </div>
      </Container>
    </div>
  );
};
export default CommonLayout;
