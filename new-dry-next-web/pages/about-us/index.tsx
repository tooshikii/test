import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import CommonLayout from "../../components/CommonLayout";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";
import { initializeApollo } from "../../lib/apollo";

const ABOUT_US_QUERY = gql`
  query aboutUs {
    aboutUs(where: { slug: "about-us" }) {
      mainPic {
        url
      }
      aboutUsText {
        html
      }
    }
  }
`;

const MEMBER_BRIEF_INFO_QUERY = gql`
  query teamMembers {
    teamMembers {
      slug
      name
      photos(first: 1) {
        url(transformation: { image: { resize: { width: 500 } } })
      }
    }
  }
`;

interface MemberBriefInfo {
  slug: string;
  name: string;
  photos: Array<{
    url: string;
  }>;
}

interface AboutUs {
  mainPic: {
    url: string;
  };
  aboutUsText: {
    html: string;
  };
}

interface AboutUsProps {
  aboutUs: AboutUs;
  teamMembers: Array<MemberBriefInfo>;
}

const AboutUs: React.ComponentType<AboutUsProps> = ({
  aboutUs,
}: AboutUsProps) => {
  return (
    <StyleComp
      header={{
        title: "ABOUT",
        description: "about us",
      }}
    >
      <CommonLayout
        assetSrc={aboutUs.mainPic?.url}
        menuSection={<TitleWithOrnament>ABOUT</TitleWithOrnament>}
        contentSection={
          <div
            dangerouslySetInnerHTML={{ __html: aboutUs.aboutUsText.html }}
          ></div>
        }
      />
    </StyleComp>
  );
};

export default AboutUs;

export const getStaticProps: GetStaticProps<AboutUsProps> = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: ABOUT_US_QUERY,
  });

  const { data: memberData } = await apolloClient.query({
    query: MEMBER_BRIEF_INFO_QUERY,
  });

  return {
    props: {
      ...data,
      ...memberData,
    },
  };
};
