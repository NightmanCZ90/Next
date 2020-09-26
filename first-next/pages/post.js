import { withRouter } from 'next/router';

const Post = withRouter(props => <h1>{`This is post ${props.router.query.id}`}</h1>);
// export const getServerSideProps = async ({ query }) => {
//   console.log(query);
//   return { props: {query: query} };
// }
export default Post;