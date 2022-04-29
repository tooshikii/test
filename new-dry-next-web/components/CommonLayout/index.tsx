import Image from "next/image";
import React from "react";
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
          <Image
            src={assetSrc}
            className={`rounded-md`}
            objectFit={"cover"}
            layout="fill"
          />
        </div>
      )}
      <div className="container m-auto">
        <div className={`my-6 flex  flex-col lg:flex-row`}>
          <div className="pt-5 grow">{menuSection}</div>
          <div className={" grow-[2]  basis-[70%] content"}>
            {contentSection}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommonLayout;
