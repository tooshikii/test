import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StyleComp from "../components/Style";
import TitleWithOrnament from "../components/TitleWithOrnament";
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

type TopPageProps = TopPageQuery;

const Home: React.ComponentType<TopPageProps> = ({ topPage }: TopPageProps) => {
  // const { topImage } = topPage;

  return (
    <StyleComp>
      <div className={`relative`}>
        {/* TODO : Until we know how to make it work for sources tags without extension, use isVideo as a work-around   */}
        {topPage?.isVideo ? (
          <video
            className={"w-full h-full object-fill"}
            controls={false}
            autoPlay
            loop
            muted
            poster={"/icons/dry_logo_resized.svg"}
          >
            <source src={topPage?.topImage?.url} type="video/mp4" />
          </video>
        ) : (
          <>
            {topPage?.topImage?.url && (
              <picture>
                <div className="w-full h-full">
                  <Image
                    priority
                    src={topPage?.topImage?.url}
                    layout="fill"
                    objectFit={"cover"}
                    className={"brightness-80"}
                  />
                </div>
              </picture>
            )}
          </>
        )}
        <div className="absolute top-0 flex flex-col items-center w-full py-4 text-white md:items-end md:w-auto md:justify-center md:flex-row md:bottom-0 ">
          <TitleWithOrnament className={"mx-4 text-shadow"}>
            <Link href={"/residents"}> RESIDENTS </Link>
          </TitleWithOrnament>
        </div>
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

    return {
      props: {
        topPage: data.topPage,
      },
    };
  } catch (error) {
    console.error("error in getStaticProps");
    console.error(error);
    throw error;
  }
};
