import { gql } from "@apollo/client";
import { Button, Divider, Theme, Typography } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useLayoutEffect, useState } from "react";
import { errorMonitor } from "stream";
import CommonLayout from "../../components/CommonLayout";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";
import { initializeApollo } from "../../lib/apollo";
import {
  HappeningDetails,
  HAPPENING_DETAILS_QUERY,
} from "../../types/happenings";

const GET_EDUCATE_SLUGIDS = gql`
  query getEducateSlugIds {
    educate(where: { slug: "educate" }) {
      contents {
        slugId
      }
    }
  }
`;

interface CourseDetailsProps {
  happening: HappeningDetails;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    infoContainer: {
      backgroundColor: "#dfdfdf",
      padding: theme.spacing(4),
      marginBottom: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      "& > div:not(:last-child), & > hr ": {
        marginBottom: theme.spacing(2),
      },
      "& > p:first-child": {
        fontSize: "19px",
        textTransform: "uppercase",
      },
      "& > div:first-child": {
        position: "relative",
        "& > button": {
          position: "absolute",
          top: 0,
          right: 0,
        },
      },
      "& .price": {
        fontWeight: "bold",
        fontSize: "19px",
      },
    },
    title: {
      fontSize: "19px",
      textTransform: "uppercase",
      marginBottom: theme.spacing(2),
    },
    tutorSection: {
      display: "flex",
      justifyContent: "left",
      flexFlow: "wrap",
      "& > div": {
        cursor: "pointer",
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: 150,
        height: 150,
        "& > img": {
          objectFit: "cover",
          width: "100%",
          height: "100%",
          transition: `filter 0.5s ease-out, color 0.5s ease-out`,
          filter: "grayscale(80%)",
          border: `1px ${"#ececec"} solid`,
          borderRadius: "5px",
        },
        "&:hover > img": {
          filter: "none",
        },
        "& > p": {
          textTransform: "uppercase",
        },
      },
    },
  })
);

const CourseDetails: React.ComponentType<CourseDetailsProps> = ({
  happening,
}: CourseDetailsProps) => {
  const classes = useStyle();
  const router = useRouter();
  const [showIframes, setShowIframes] = useState(false);

  useLayoutEffect(() => {
    setShowIframes(true);
  }, [setShowIframes]);

  const openSingUp = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <StyleComp
      header={{
        title: happening.title,
      }}
    >
      <CommonLayout
        videoSrc={happening.video?.url}
        assetSrc={happening.pics[0]?.url}
        menuSection={<TitleWithOrnament>EDUCATE</TitleWithOrnament>}
        contentSection={
          <div>
            <div className={classes.infoContainer}>
              <div>
                <Typography variant={"body1"}>{happening.title}</Typography>
                <Typography className={"price"}>{happening.price} €</Typography>
                <Button
                  onClick={() => openSingUp(happening.signUpUrl)}
                  variant={"contained"}
                >
                  SIGN UP
                </Button>
              </div>
              <Divider />
              <div
                className={"normalizeRichText"}
                dangerouslySetInnerHTML={{ __html: happening.description.html }}
              />
            </div>

            {showIframes &&
              happening.mediaIframes?.map((iframe) => (
                <div
                  key={iframe}
                  dangerouslySetInnerHTML={{ __html: iframe }}
                />
              ))}
            <div>
              <Typography className={classes.title} variant={"body1"}>
                Tutors
              </Typography>
              <div className={classes.tutorSection}>
                {happening.teamMembers.map((teacher) => (
                  <div
                    onClick={() => router.push(`/residents/${teacher.slug}`)}
                    key={teacher.slug}
                  >
                    <img src={teacher.photos[0].url} alt={teacher.name} />
                    <Typography variant={"body1"}>{teacher.name}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
    </StyleComp>
  );
};

export default CourseDetails;

export const getStaticProps: GetStaticProps<CourseDetailsProps> = async ({
  params,
}) => {

  if (!params || !params.slugId) {
    return {
      notFound: true,
    };
  }

  const apolloClient = initializeApollo();

  const { data, errors } = await apolloClient.query<CourseDetailsProps>({
    query: HAPPENING_DETAILS_QUERY,
    variables: { slugId: params.slugId },
  });

  if (!data.happening) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query({
      query: GET_EDUCATE_SLUGIDS,
    });

    const paths = data.educate.contents.map((content) => ({
      params: { slugId: content.slugId },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error(error, "educate");
    throw error
  }
};
