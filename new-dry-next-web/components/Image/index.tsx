import React from "react";
import NextImage, { ImageProps } from "next/image";

const getLastPath = (url: string) => {
  if (url.indexOf("/") < 0) {
    return url;
  }

  return url.slice(url.lastIndexOf("/") + 1, url.length);
};

export const myLoader: ImageProps["loader"] = ({ src, width }) => {
  if (src.indexOf("https") < 0) {
    return src;
  }
  const _width = !width ? "" : `/resize=width:${width}`;
  return `https://media.graphcms.com${_width}/${getLastPath(src)}`;
};

type MyImageProps = {
  src: string;
  width?: number;
  height?: number;
} & Omit<ImageProps, "height">;

const Image: React.FC<MyImageProps> = ({ src, width, ...others }) => {
  return (
    <NextImage
      loader={myLoader}
      src={src}
      width={width}
      height={0}
      {...others}
    />
  );
};
export default Image;
