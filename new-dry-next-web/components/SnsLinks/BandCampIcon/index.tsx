import React from "react";

/**
 * NOTE :
 * To include SVG file into next.js project, it's required to change the configuration of webpack.
 * As a workaround, embedded version of SVG is used.
 * https://medium.com/frontend-digest/how-to-import-svgs-into-nextjs-8ec6100e613f
 * Adapted from https://fontawesome.com/icons/bandcamp?style=brands
 */
const BandCampIcon: React.ComponentType = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="bandcamp"
      className={"MuiSvgIcon-root"}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z"></path>
    </svg>
  );
};
export default BandCampIcon;
