import NextImage from "next/image";
import React from "react";
import { myLoader } from "../Image";

interface CommonLayoutProps {
  videoSrc?: string;
  assetSrc?: string;
  menuSection?: React.ReactNode;
  contentSection: React.ReactNode;
}

const CommonLayout: React.ComponentType<CommonLayoutProps> = ({
  assetSrc,
  menuSection,
  contentSection,
  videoSrc,
}: CommonLayoutProps) => {
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
      <div className="container ">
        <div className={`my-6 flex  flex-col lg:flex-row`}>
          <div className="grow">{menuSection}</div>
          <div className={" grow-[2]  basis-[70%] content"}>
            {contentSection}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommonLayout;
