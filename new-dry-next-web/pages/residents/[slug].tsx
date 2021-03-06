import cn from "classnames";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommonLayout from "../../components/CommonLayout";
import SnsLinks from "../../components/SnsLinks";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";
import { initializeApollo } from "../../lib/apollo";
import {
  MemberDetailsDocument,
  MemberDetailsQuery,
  MemberDetailsQueryVariables,
} from "../../src/generated/graphql";
import { EventType } from "../../types/eventType";
import { DateToDispStr } from "../../utils";

type ResidentsProps = MemberDetailsQuery;

const SINGLE_PIC_RESPONSIVE = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

const isEducate = (eventType: string) => {
  return eventType === EventType.COURSE || eventType === EventType.PROGRAM;
};

const Residents: React.ComponentType<ResidentsProps> = ({
  teamMember,
}: ResidentsProps) => {
  const router = useRouter();

  // Delay bandcamp iframe until DOM is rendered
  const [showBC, setShowBC] = useState<boolean>(false);

  const effect = typeof window === "undefined" ? useEffect : useLayoutEffect;

  effect(() => {
    setShowBC(true);
  }, []);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!teamMember) {
    return null;
  }

  return (
    <StyleComp
      header={{
        title: teamMember?.name ? teamMember.name.toUpperCase() : "",
      }}
    >
      <CommonLayout
        assetSrc={teamMember ? teamMember.photos[0]?.url : ""}
        menuSection={<TitleWithOrnament>ABOUT</TitleWithOrnament>}
        contentSection={
          <div>
            <div className="mb-10">
              <p className="mb-4 text-3xl font-bold">
                {teamMember && teamMember.name}
              </p>
              <div className={"flex  flex-col lg:flex-row"}>
                <div className="m-auto mb-4">
                  <Carousel
                    responsive={SINGLE_PIC_RESPONSIVE}
                    arrows
                    className={`mr-4 w-[350px] h-[350px]`}
                  >
                    {teamMember?.photos.map((photo) => (
                      <div
                        className={`w-[350px] h-[350px] border  border-brand-line rounded-md`}
                        key={photo.url}
                      >
                        <Image
                          src={photo.url}
                          className={`rounded-md blur-sm`}
                          objectFit={"cover"}
                          layout="fill"
                        />
                        <Image
                          src={photo.url}
                          className={`rounded-md`}
                          objectFit={"contain"}
                          layout="fill"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
                {teamMember && teamMember.bio && (
                  <div className="">
                    <div
                      className={"normalizeRichText"}
                      dangerouslySetInnerHTML={{
                        __html: teamMember.bio.html,
                      }}
                    />
                    <SnsLinks
                      className="flex"
                      SnsMap={teamMember.accountLinks}
                    />
                  </div>
                )}
              </div>
            </div>
            {teamMember.happenings.length > 0 && (
              <div className={"pb-8"}>
                <p className="mb-4 text-2xl font-bold">UPCOMING</p>
                <div
                  className={cn(
                    "font-serif text-brand-line transition-all  duration-100"
                  )}
                >
                  {teamMember.happenings.map((happening) => (
                    <div
                      aria-hidden="true"
                      key={happening.slugId}
                      role={"link"}
                      className={cn(
                        " max-w-4xl m-auto border-t   border-brand-line flex justify-between px-3 last:border-b ",
                        isEducate(happening.eventType) &&
                          "hover:text-black cursor-pointer"
                      )}
                      onClick={() => {
                        isEducate(happening.eventType) &&
                          router.push(`/educate/${happening.slugId}`);
                      }}
                    >
                      <span>{DateToDispStr(happening.happeningDates[0])}</span>
                      <span>{happening.title}</span>
                      <span>{happening.locationName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div>
              <p className="pb-8 mb-4 text-2xl font-bold">RELEASES</p>
              <div className={"flex  flex-wrap justify-evenly"}>
                {teamMember.releases.map((release) => (
                  <>
                    {showBC && (
                      <div
                        className="mb-4 mr-4 bandcamp"
                        key={release}
                        dangerouslySetInnerHTML={{ __html: release }}
                      />
                    )}
                  </>
                ))}
              </div>
              <div className={`mediaWrapper`}>
                {teamMember.mediaIframes.map((iframe, idx) => (
                  <div
                    className={"my-5"}
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: iframe }}
                  />
                ))}
              </div>
            </div>
          </div>
        }
      ></CommonLayout>
    </StyleComp>
  );
};

export default Residents;

export const getStaticProps: GetStaticProps<ResidentsProps> = async ({
  params,
}) => {
  const apolloClient = initializeApollo();

  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  try {
    const { data, errors } = await apolloClient.query<
      MemberDetailsQuery,
      MemberDetailsQueryVariables
    >({
      query: MemberDetailsDocument,
      variables: { slug: params.slug as string },
    });

    if (!data.teamMember) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        ...data,
      },
    };
  } catch (error) {
    console.error("error in getStaticProps");
    console.error(error);
    throw error;
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
