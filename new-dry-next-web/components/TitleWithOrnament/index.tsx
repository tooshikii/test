import cn from "classnames";
import React from "react";

interface TitleWithOrnamentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: React.ReactNode;
}

const TitleWithOrnament: React.ComponentType<TitleWithOrnamentProps> = ({
  children,
  className,
}: TitleWithOrnamentProps) => {
  return (
    <span
      className={cn(
        `relative text-6xl drop-shadow-2xl font-dry ornament`,
        className
      )}
    >
      {children}
    </span>
  );
};
export default TitleWithOrnament;
