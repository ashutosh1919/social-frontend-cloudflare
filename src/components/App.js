import React, { Component } from 'react';
import '../styles/App.css';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  fetchData(){
    fetch("http:localhost:8787/posts", {
      "method": "GET",
      "mode":"cors",
      "headers": { 'Access-Control-Allow-Origin': '*' }
    })
    .then( async response => {
      let data = await response.json();
      this.setState({ posts: data["posts"]});
    })
    .catch(err => { console.log(err); 
    });
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    fetch("https://social-api.ashuhath.workers.dev/posts", {
      "method": "GET",
      "mode":"cors",
      "headers": { 'Access-Control-Allow-Origin': '*' }
    })
    .then( async response => {
      let data = await response.json();
      this.setState({ posts: data["posts"]});
    })
    .catch(err => { console.log(err); 
    });
}


  render() {
    let posts = [];

    return (
      <div className="App">
        {
          this.state.posts.map(post => {
            return <Card 
              profileImageUrl={post.profileUrl}
              username={post.username}
              mediaUrl={post.imgUrl}
              like={post.liked}
              likes={post.likes}
              caption={post.caption}
              posted={post.posted}
            />
          })
        }
       {/* <Card 
          profileImageUrl={headshot}
          username={data.username}
          mediaUrl={media}
          like={data.liked}
          likes={data.likes}
          caption={data.caption}
          posted={data.posted}
       /> */}
      </div>
    );
  }
}

export default App;
