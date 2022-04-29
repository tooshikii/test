import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { BlogEntries } from '..';

interface PropTypes {
  category : string,
  blogArticle : any[]
}

const ProductPage: NextPage<PropTypes> = ({
  category,
  blogArticle,
}) => {
  const router = useRouter();

  return (
    <div>
      <div>category : {category}</div>
      <div>
        {blogArticle.map(v => (
          <div>{v.slug} <Link href={`/hoge/${category}/${v.slug}`}>LINK</Link>  </div>
        ))}
      </div>
    </div>
  );
};
interface UrlQuery extends ParsedUrlQuery {
  category: string;
}

export const getStaticProps: GetStaticProps<PropTypes, UrlQuery> =
  async (context) => {
    const handle = context.params?.category;

    const blogArticle = handle ? (BlogEntries as any)[(handle as any)] : []

    // fetch blog article based on handle

    try {
      return {
        props: {
          category : handle as string,
          blogArticle
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
  console.log('yoyo')
  return {
    paths: [
      {
        params: { category: 'cat' },
      },
      {
        params: { category: 'dog' },
      }
    ],
    fallback: 'blocking',
  };
};

export default ProductPage
