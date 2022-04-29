import React, { useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "../Image";
import CustomButtonGroup from "./CustomButtonGroup";

interface itemDetails {
  id: string;
  name?: string | null;
  imgSrc: string;
  onClick: () => void;
}

interface CustomCarouselProps {
  items: Array<itemDetails>;
}

const CustomCarousel: React.ComponentType<CustomCarouselProps> = ({
  items,
}: CustomCarouselProps) => {
  const responsive = useMemo(() => {
    return {
      desktop: {
        breakpoint: { max: 3000, min: 976 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 976, min: 480 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1,
      },
    };
  }, []);

  return (
    <div className={"bg-black py-6 relative"}>
      <Carousel
        arrows={false}
        responsive={responsive}
        customButtonGroup={<CustomButtonGroup />}
        renderButtonGroupOutside={true}
      >
        {items.map((item) => (
          <div className="flex items-center justify-center" key={item.id}>
            <div
              onClick={item.onClick}
              aria-hidden="true"
              className="cursor-pointer"
            >
              {item.imgSrc ? (
                <Image
                  src={item.imgSrc}
                  width={250}
                  height={500}
                  alt={item.name || ""}
                  className={"object-cover w-64 border border-gray-400 "}
                />
              ) : (
                <h6 className="text-gray-400">{item.name}</h6>
              )}
              <h6 className="text-gray-400">{item.name}</h6>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
