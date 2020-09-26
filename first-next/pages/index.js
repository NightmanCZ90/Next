import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  static async getInitialProps() {
    console.log("Fetching your data in getInitialProps");
  }

  render() {
    return (
      <div>
        <h1>Our Index Page</h1>
      </div>
    )
  }
}

// const Index = () => {
//   return (
//     <div>
//       <h1>Our Index Page</h1>
//     </div>
//   )
// };
// Index.getInitialProps = async () => {
//   console.log("Fetching your data in getInitialProps");
// }

export default Index;