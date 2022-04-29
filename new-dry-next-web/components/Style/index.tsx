import Head from "next/head";
import React from "react";
import MenuBackdrop from "../MenuBackdrop";
import AppHeader from "./AppHeader";
import Footer from "./Footer";

interface StyleCompProps {
  header?: {
    title: string;
    description?: string;
  };
  children: React.ReactNode;
}

const StyleComp: React.ComponentType<StyleCompProps> = ({
  children,
  header,
}: StyleCompProps) => {
  return (
    <div>
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
        <div className={"mt-[50px]  min-h-[calc(100vh_- _50px]"}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default StyleComp;
