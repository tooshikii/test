import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import BandCampIcon from "./BandCampIcon";
import ExternalLink from "./ExternalLink";
import SoundCloudIcon from "./SoundCloudIcon";

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

const ICON_MAP : {[key in string] : React.ReactNode} = {
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  soundcloud: <SoundCloudIcon />,
  bandcamp: <BandCampIcon />,
  link: <ExternalLink />,
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
          <IconButton edge="start" aria-label="menu" key={link[1]} size="large">
            <a target={"_blank"} href={link[1]} rel="noreferrer">
              {Icon}
            </a>
          </IconButton>
        );
      })}
    </div>
  );
};
export default SnsLinks;
