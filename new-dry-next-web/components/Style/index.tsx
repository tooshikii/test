import { Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import React from "react";
import MenuBackdrop from "../MenuBackdrop";
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import Head from "next/head";

interface StyleCompProps {
  header?: {
    title: string;
    description?: string;
  };
  children: React.ReactNode;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    rootContainer: {
      background: theme.palette.background.default,
    },
    mainContainer: {
      marginTop: 50,
      minHeight: `calc(100vh - ${50}px)`,
    },
  })
);

const StyleComp: React.ComponentType<StyleCompProps> = ({
  children,
  header,
}: StyleCompProps) => {
  const classes = useStyle();
  return (
    <div className={classes.rootContainer}>
      <Head>
        <title>DRY BERLIN {header && `| ${header.title}`}</title>
        <meta
          property="og:title"
          content={`DRY BERLIN ${header && `| ${header.title}`}`}
          key="title"
        />
        <meta
          property="og:description"
          content={`${header && `| ${header.description}`}`}
          key="description"
        />
      </Head>
      <MenuBackdrop />
      <AppHeader />
      <main>
        <div className={classes.mainContainer}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};
export default StyleComp;
