import { gql, useQuery, NetworkStatus } from "@apollo/client";

export const TEST = gql`
  query happening {
    happenings {
      title
      description {
        html
      }
      pics {
        url
      }
      location {
        latitude
        longitude
      }
      courseDateTime
      relatedMembers {
        name
      }
    }
  }
`;

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
};

export default function PostList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(TEST, {
    variables: allPostsQueryVars,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  // const loadMorePosts = () => {
  //   fetchMore({
  //     variables: {
  //       skip: allPosts.length,
  //     },
  //   })
  // }Fix build error

  if (error) return <p>Error</p>;
  if (loading && !loadingMorePosts) return <div>Loading</div>;

  // const { allPosts, _allPostsMeta } = data
  // const areMorePosts = allPosts.length < _allPostsMeta.count

  return (
    <section>
      {JSON.stringify(data)}
      {/* <ul>
        {allPosts.map((post, index) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href={post.url}>{post.title}</a>
            </div>
          </li>
        ))}
      </ul>
      {areMorePosts && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )} */}
    </section>
  );
}
