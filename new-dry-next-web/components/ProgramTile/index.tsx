import React from "react";
import { sanitizeHtml } from "../../utils/strUtils";

interface ProgramTileProps {
  title: string;
  onClick?: () => void;
  logo?: {
    url: string;
  };
  text?: string;
}

const ProgramTile: React.ComponentType<ProgramTileProps> = ({
  title,
  text,
  onClick,
}: ProgramTileProps) => {
  return (
    <div className={" bg-brand-theme p-4 mb-2 rounded "}>
      <p>{title}</p>
      {text && <p>{sanitizeHtml(text)}</p>}
      {/* // TODO : update type */}
      {onClick && <button onClick={() => onClick()}>MORE INFO</button>}
    </div>
  );
};
export default ProgramTile;
