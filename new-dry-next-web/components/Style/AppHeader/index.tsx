import { useRouter } from "next/dist/client/router";
import React, { useContext } from "react";
import { BackdropContext } from "../../MenuBackdrop/Context";
import DryLogo from "./DryLogo";

interface AppHeaderProps {}

const AppHeader: React.ComponentType<AppHeaderProps> = () => {
  const router = useRouter();
  const { setIsOpen } = useContext(BackdropContext);

  const openBackDrop = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="h-[50px] w-full top-0 fixed z-20 ">
      <div className={"flex  justify-between p-2"}>
        <DryLogo onClick={() => router.push("/")} />
        {/* for some reasons that I don't understand, how SVG is load has been changed and breaks the display
        now we apply width specifically here   */}
        <img
          src="/icons/gradient_resized.svg"
          alt=""
          style={{ width: 180 }}
          className={"hidden md:block"}
        />
        <img
          src="/icons/thorns_icon_resized.svg"
          alt=""
          style={{ width: 180 }}
          className={"hidden md:block"}
        />
        <div
          className={`flex items-center  text-center text-[7px] text-black space-x-1`}
        >
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
        <div className={` hidden lg:block`}>
          <span>
            CONTACT INFORMATION <br />
            INFO@DRY-AGENCY.COM
          </span>
        </div>
        <img
          src="/icons/WhiteNoiseDistortion_white_yh.png"
          alt=""
          className={"hidden md:block"}
        />
        <div>
          <img src="/icons/barcode_resized.svg" alt="" />
          <div className={"text-xs bold "}>
            <span className="pr-1 ">
              <a href="/store">STORE</a>
            </span>
            <span className="px-1 ">
              <a href="/about-us">ABOUT</a>
            </span>
            <span className="pl-1 ">
              <a href="/contact">CONTACT</a>
            </span>
          </div>
        </div>
        <div className={"cursor-pointer"} onClick={openBackDrop}>
          <img src="/icons/burger_resized.svg" alt="" className=" h-7" />
        </div>
      </div>
    </div>

    // </AppBar>
  );
};

export default AppHeader;
