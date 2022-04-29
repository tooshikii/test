import React from "react";

interface DryLogoProps {
  onClick: () => void;
}

/**
 * NOTE :
 * To include SVG file into next.js project, it's required to change the configuration of webpack.
 * As a workaround, embedded version of SVG is used.
 * https://medium.com/frontend-digest/how-to-import-svgs-into-nextjs-8ec6100e613f
 * Adapted from https://fontawesome.com/icons/bandcamp?style=brands
 */
const DryLogo: React.ComponentType<DryLogoProps> = ({
  onClick,
}: DryLogoProps) => {
  return (
    <svg
      viewBox="637 359 90 33"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={"h-8 cursor-pointer hover:fill-white ease-linear  duration-75"}
      onClick={() => onClick()}
    >
      <g
        id="Ec-6lUbXoAEFi0H"
        className="st0"
        transform="matrix(1, 0, 0, 1, 547.75, 299.300003)"
      >
        <g>
          <rect
            x="89.25"
            y="59.7"
            className="st1"
            width="90"
            height="33"
            style={{ fill: "none" }}
          />
        </g>
        <g>
          <path
            className="st2"
            d="M179.25,92.7h-90v-33h90V92.7z M90.75,91.2h87v-30h-87V91.2z"
            style={{ fill: "rgb(19, 19, 19)" }}
          />
        </g>
      </g>
      <g id="Gruppe_132" transform="matrix(1, 0, 0, 1, 554.15, 303.952003)">
        <path
          id="Pfad_603"
          className="st2"
          d="M145.28,64.46h-4.15v4.64c0,2.56,2.08,4.64,4.65,4.64h10.29v1h-14.91 c0.26,2.36,2.25,4.14,4.62,4.15h14.94V64.46h-4.15v5.14h-11.29V64.46L145.28,64.46z"
        />
        <path
          id="Pfad_604"
          className="st2"
          d="M121.52,73.76h6.15v0.5c0,2.56,2.08,4.64,4.65,4.65h4.65v-4.14h-4.65v-1 c2.56,0,4.64-2.08,4.65-4.65v-4.65h-19.58V78.9h4.15L121.52,73.76L121.52,73.76z M122.02,68.61h10.29v1h-10.29V68.61z"
        />
        <path
          id="Pfad_605"
          className="st2"
          d="M98.17,68.6h11.29v1.79c0,2.41-1.95,4.36-4.36,4.36H94.02v4.15h12.37 c3.99,0,7.22-3.23,7.22-7.22v-7.22H94.02v6.72h4.15V68.6L98.17,68.6z"
        />
      </g>
    </svg>
  );
};
export default DryLogo;
