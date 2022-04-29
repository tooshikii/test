import React from "react";
import snsData from "../../../public/data/dry_sns_map.json";
import NewsLetterSubscription from "../../NewsLetterSubscription";
import SnsLinks from "../../SnsLinks";

const Footer: React.ComponentType = () => {
  return (
    <footer>
      <NewsLetterSubscription />
      <div
        style={{ letterSpacing: 1 }}
        className={`mx-2.5 text-center text-black flex justify-between text-xs  bg-brand-theme `}
      >
        <div className={"flex items-center text-xxs"}>
          <span>
            DESIGN BY STEFANO FELICE <br />
          </span>
        </div>
        <div className={"font-bold flex"}>
          <span className={"pr-1"}>FIND US ON</span>
          <SnsLinks SnsMap={snsData} className="flex"></SnsLinks>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
