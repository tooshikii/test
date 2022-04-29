import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useContext } from "react";
import snsData from "../../public/data/dry_sns_map.json";
import CloseIcon from "../../public/icons/close.svg";
import SnsLinks from "../SnsLinks";
import { BackdropContext } from "./Context";

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
  const { isOpen, setIsOpen } = useContext(BackdropContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={"  bg-black/50 fixed top-0 right-0 z-50 w-screen h-screen"}
        >
          <button
            className="absolute top-0 right-0 p-4 "
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseIcon className="w-8 h-8" />
          </button>
          <div
            className={
              "m-auto max-w-md text-brand-theme text-5xl bold flex justify-center  items-center"
            }
          >
            <div className="flex flex-col min-h-[80vh] ">
              {Links.map((link) => (
                <Link href={`/${link.path}`} key={link.path} passHref>
                  <a onClick={() => setIsOpen(false)}>{link.displayName}</a>
                </Link>
              ))}
              <SnsLinks
                SnsMap={snsData}
                className={"flex flex-row fill-white"}
              />
              <div className={" text-xs"}>
                <Link href={`/imprint`} passHref>
                  <a onClick={() => setIsOpen(false)} className={"p-2"}>
                    IMPRINT
                  </a>
                </Link>
                <Link href={`/data-protection`} passHref>
                  <a onClick={() => setIsOpen(false)} className={"p-2"}>
                    DATA PROTECTION
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuBackdrop;
