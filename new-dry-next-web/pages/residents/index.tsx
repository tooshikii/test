import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import CommonLayout from "../../components/CommonLayout";
import CustomCarousel from "../../components/CustomCarousel";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";
import { initializeApollo } from "../../lib/apollo";
import {
  MemberBriefInfoQueryDocument,
  MemberBriefInfoQueryQuery,
} from "../../src/generated/graphql";

type ResidentsProps = MemberBriefInfoQueryQuery;

const Residents: React.ComponentType<ResidentsProps> = ({
  teamMembers,
}: ResidentsProps) => {
  const router = useRouter();

  return (
    <StyleComp
      header={{
        title: "Residents",
        description: "Residents",
      }}
    >
      <CommonLayout
        menuSection={
          <div>
            <TitleWithOrnament>RESIDENTS</TitleWithOrnament>
          </div>
        }
        contentSection={<div></div>}
      />
      <CustomCarousel
        items={teamMembers.map((member) => ({
          id: member.slug,
          name: member.name,
          imgSrc: member.photos[0].url,
          onClick: () => router.push(`/residents/${member.slug}`),
        }))}
      />
    </StyleComp>
  );
};

export default Residents;

export const getStaticProps: GetStaticProps<ResidentsProps> = async () => {
  const apolloClient = initializeApollo();

  const { data: memberData } =
    await apolloClient.query<MemberBriefInfoQueryQuery>({
      query: MemberBriefInfoQueryDocument,
    });

  return {
    props: {
      ...memberData,
    },
  };
};
