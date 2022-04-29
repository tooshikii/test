import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import StyleComp from "../components/Style";
import { initializeApollo } from "../lib/apollo";
import { TopPageQuery } from "../src/generated/graphql";

const TOP_PAGE = gql`
  query topPage {
    topPage(where: { slug: "top-page" }) {
      topImage {
        url
      }
      isVideo
    }
  }
`;

type TopPageProps = Exclude<TopPageQuery["topPage"], null | undefined>;

const Home: React.ComponentType<TopPageProps> = (props: TopPageProps) => {
  const { topImage, isVideo } = props;

  return (
    <StyleComp>
      <div className={`relative`}>
        {/* TODO : Until we know how to make it work for sources tags without extension, use isVideo as a work-around   */}
        {isVideo ? (
          <video
            className={"w-full h-[calc(100vh_-_50px)] object-fill"}
            controls={false}
            autoPlay
            loop
            muted
            poster={"/icons/dry_logo_resized.svg"}
          >
            <source src={topImage?.url} type="video/mp4" />
          </video>
        ) : (
          <>
            {topImage?.url && (
              <div className="w-full h-[calc(100vh_-_50px)]">
                <Image
                  priority
                  src={topImage?.url}
                  layout="fill"
                  objectFit={"cover"}
                  className={"brightness-80"}
                />
              </div>
            )}
          </>
        )}
        {/* <div className="absolute top-0 flex flex-col items-center w-full py-4 text-white md:items-end md:w-auto md:justify-center md:flex-row md:bottom-0 ">
          <TitleWithOrnament className={"mx-4 text-shadow"}>
            <Link href={"/residents"}> RESIDENTS </Link>
          </TitleWithOrnament>
        </div> */}
      </div>
    </StyleComp>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<TopPageProps> = async () => {
  const apolloClient = initializeApollo();

  try {
    const { data, errors } = await apolloClient.query<TopPageQuery>({
      query: TOP_PAGE,
    });

    if (!data || !data.topPage) {
      throw new Error("no data");
    }

    return {
      props: data.topPage,
    };
  } catch (error) {
    console.error("error in getStaticProps");
    console.error(error);
    throw error;
  }
};
