import React from "react";
import BandCampIcon from "../../public/icons/bandcamp.svg";
import FacebookIcon from "../../public/icons/facebook-filled.svg";
import InstagramIcon from "../../public/icons/instagram-original.svg";
import SoundCloud from "../../public/icons/soundcloud-original.svg";
import ExternalLink from "../../public/icons/world.svg";

/**
 * Key : sns name, e.g soundcould
 * Value : absolute path to sns account page e.g https://soundcloud.com/brabra
 */
interface SnsLink {
  [key: string]: string;
}

interface SnsLinksProps {
  SnsMap: SnsLink;
  className?: string;
}

const ICON_MAP: { [key in string]: React.ReactNode } = {
  instagram: <InstagramIcon className={"h-6 block "} />,
  facebook: <FacebookIcon className={"h-6 block "} />,
  soundcloud: <SoundCloud className={"h-6 block "} />,
  bandcamp: <BandCampIcon className={"h-6 block "} />,
  link: <ExternalLink className={"h-6 block "} />,
};

const SnsLinks: React.ComponentType<SnsLinksProps> = ({
  SnsMap,
  className,
}: SnsLinksProps) => {
  return (
    <div className={className}>
      {Object.entries(SnsMap).map((link) => {
        const Icon = ICON_MAP[link[0]];
        if (Icon === undefined) return null;
        return (
          <a
            key={link[1]}
            target={"_blank"}
            className={"h-6 w-6 m-2"}
            href={link[1]}
            rel="noreferrer"
          >
            {Icon}
          </a>
        );
      })}
    </div>
  );
};
export default SnsLinks;
