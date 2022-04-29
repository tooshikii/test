import { gql } from "@apollo/client";

export const HAPPENING_DETAILS_QUERY = gql`
  query courseDetails($slugId: String) {
    happening(where: { slugId: $slugId }) {
      title
      pics {
        url(transformation: { image: { resize: { width: 800 } } })
      }
      description {
        html
      }
      mediaIframes
      signUpUrl
      locationName
      price
      logo {
        url
      }
      video {
        url
      }
      teamMembers {
        name
        slug
        bio {
          text
        }
        photos(first: 1) {
          url(transformation: { image: { resize: { width: 300 } } })
        }
      }
    }
  }
`;

export interface HappeningDetails {
  title: string;
  pics: Array<{ url: string }>;
  video?: {
    url: string;
  };
  signUpUrl: string;
  description: {
    html: string;
  };
  mediaIframes?: Array<string>;
  locationName: string;
  price: number;
  logo: { url: string };
  teamMembers: Array<{
    name: string;
    slug: string;
    bio: {
      text: string;
    };
    photos: Array<{
      url: string;
    }>;
  }>;
}
