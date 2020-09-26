const Post = ({ query }) => {
  return <h1>{`This is post ${query.id}`}</h1>;
};
export const getServerSideProps = async ({ query }) => {
  console.log(query);
  return { props: {query: query} };
}
export default Post;