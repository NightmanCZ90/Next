import axios from 'axios';

const Post = ({ query }) => {
  return (
    <h1>{`This is post ${query.id}`}</h1>
  );
};
export const getServerSideProps = async ({ query }) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=3');
  const {data} = res;
  console.log(data[0])
  return { ...query, comments: data };
}
export default Post;