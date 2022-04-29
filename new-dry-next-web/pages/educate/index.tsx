import { gql } from "@apollo/client";
import { Theme } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo, useState } from "react";
import CommonLayout from "../../components/CommonLayout";
import ProgramTile from "../../components/ProgramTile";
import StyleComp from "../../components/Style";
import TitleWithOrnament from "../../components/TitleWithOrnament";
import { initializeApollo } from "../../lib/apollo";
import { EventType } from "../../types/eventType";

const EDUCATE_PAGE_QUERY = gql`
  query educatePage {
    educate(where: { slug: "educate" }) {
      topPic {
        url
      }
      description {
        html
      }
      contents {
        title
        eventType
        description {
          text
        }
        slugId
        logo {
          url
        }
      }
    }
  }
`;

interface HappeningInfo {
  title: string;
  slugId: string;
  logo?: {
    url: string;
  };
  description: {
    text: string;
  };
  eventType: string;
}

interface EducateProps {
  educate: {
    topPic: {
      url: string;
    };
    description: {
      html: string;
    };
    contents: Array<HappeningInfo>;
  };
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    typeSelect: {
      "&>div": {
        marginBottom: theme.spacing(1),
        textTransform: "uppercase",
        cursor: "pointer",
        "&.selected": {
          fontWeight: "bold",
        },
      },
    },
  })
);

const SELECT_ALL = "ALL";
const TALK_AND_WORKSHOP = "TALK&WORKSHOP";
type ExcludedEventType = Exclude<
  Exclude<EventType, EventType.TALK>,
  EventType.PROGRAM
>;

type SELECTABLE_TYPES =
  | typeof SELECT_ALL
  | typeof TALK_AND_WORKSHOP
  | ExcludedEventType;

const NameMap = {
  [EventType.COURSE]: "Courses",
  [EventType.PROGRAM]: "Programs",
  [TALK_AND_WORKSHOP]: "Talk & WorkShop",
};

const getDisplayName = (type: SELECTABLE_TYPES) => {
  return NameMap[type] ? NameMap[type] : type;
};

const Courses: React.ComponentType<EducateProps> = ({
  educate,
}: EducateProps) => {
  const router = useRouter();
  const classes = useStyle();

  // Combine talk & work shop as one event type
  const reorderedMap = useMemo(() => {
    return educate.contents.reduce((prev, v) => {
      let key = v.eventType;
      if (
        v.eventType === EventType.TALK ||
        v.eventType === EventType.WORKSHOP
      ) {
        key = TALK_AND_WORKSHOP;
      }
      prev[key]?.length ? prev[key].push(v) : (prev[key] = [v]);
      return prev;
    }, {} as { string: [HappeningInfo] });
  }, [educate.contents]);

  // Filter logics
  const [selectedEventType, setSelectedEventType] =
    useState<SELECTABLE_TYPES>(SELECT_ALL);
  const [displayedContents, setDisplayedContents] = useState<
    Array<HappeningInfo>
  >(educate.contents);

  useEffect(() => {
    if (selectedEventType === SELECT_ALL) {
      setDisplayedContents(Object.values(reorderedMap).flatMap((v) => v));
    } else {
      setDisplayedContents(reorderedMap[selectedEventType] || []);
    }
  }, [selectedEventType, reorderedMap]);

  return (
    <StyleComp
      header={{
        title: "EDUCATE",
      }}
    >
      <CommonLayout
        assetSrc={educate.topPic?.url}
        menuSection={
          <div>
            <TitleWithOrnament>EDUCATE</TitleWithOrnament>
            <div className={classes.typeSelect}>
              <div
                onClick={() => setSelectedEventType(SELECT_ALL)}
                className={`${
                  selectedEventType === SELECT_ALL ? "selected" : ""
                }`}
              >
                {SELECT_ALL}
              </div>
              {Object.entries(NameMap).map((entry) => (
                <div
                  key={entry[0]}
                  role={"link"}
                  onClick={() =>
                    setSelectedEventType(entry[0] as SELECTABLE_TYPES)
                  }
                  className={`${
                    selectedEventType === entry[0] ? "selected" : ""
                  }`}
                >
                  {getDisplayName(entry[0] as SELECTABLE_TYPES)}
                </div>
              ))}
            </div>
          </div>
        }
        contentSection={
          <div>
            {displayedContents.length > 0 ? (
              displayedContents.map((courseInfo) => (
                <ProgramTile
                  key={courseInfo.slugId}
                  title={courseInfo.title}
                  text={courseInfo.description.text}
                  onClick={() => router.push(`/educate/${courseInfo.slugId}`)}
                />
              ))
            ) : (
              <ProgramTile
                key={"no-result"}
                title={`NO RESULTS WITH ${selectedEventType}`}
              />
            )}
          </div>
        }
      />
    </StyleComp>
  );
};

export default Courses;

export const getStaticProps: GetStaticProps<EducateProps> = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: EDUCATE_PAGE_QUERY,
  });

  return {
    props: {
      ...data,
    },
  };
};
