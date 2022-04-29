import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { BlogEntries } from '../../';

interface PropTypes {
  article : any
}

const ProductPage: NextPage<PropTypes> = ({
  article
}) => {
  const router = useRouter();

  return (
    <div>
      <div>artivle : {JSON.stringify({article})}</div>

    </div>
  );
};
interface UrlQuery extends ParsedUrlQuery {
  slug: string | Array<string>;
}

export const getStaticProps: GetStaticProps<PropTypes, UrlQuery> =
  async (context) => {
    const handle = context.params?.slug;

    const blogs = Object.keys(BlogEntries).map((key) => (BlogEntries as any)[key]).flat();

    console.log({
      blogs, handle
    })

    const article = blogs.filter(v => v.slug === handle);

    if (article.length === 0) {
      return { notFound: true };
    }

    // fetch blog article based on handle

    console.log({article})

    try {
      return {
        props: {
          article : article[0] || null
        },
        revalidate: 300,
      };
    } catch (error) {
      console.error(
        `Error while prefetching data for product with handle: ${handle}.\n${error}`
      );
      return { notFound: true };
    }
  };

export const getStaticPaths: GetStaticPaths<UrlQuery> = async (props) => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default ProductPage
