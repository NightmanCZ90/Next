import axios from 'axios';
import Link from 'next/link';

// import React, { Component } from 'react';

// class Index extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
       
//     }
//   }
  
//   static async getInitialProps() {
//     console.log("Fetching your data in getInitialProps");
//     return { title: "This is the title"}
//   }

//   render() {
//     return (
//       <div>
//         <h1>Our Index Page</h1>
//       </div>
//     )
//   }
// }

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Our Index Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};
Index.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  return { posts: data };
}

export default Index;