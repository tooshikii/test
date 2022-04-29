import { GetServerSideProps } from "next";
import PostList, { TEST, allPostsQueryVars } from "../components/Test";
import { initializeApollo, addApolloState } from "../lib/apollo";

const SSRPage = () => (
  <>
    <p>This is SSR page</p>
    <PostList />
  </>
);

// Next.js will pre-render this page on each request using the data returned by getServerSideProps.
export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  // Fetch first query on server, and later on push the result into state.
  // This state is visible to client side also.
  await apolloClient.query({
    query: TEST,
    variables: allPostsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default SSRPage;
