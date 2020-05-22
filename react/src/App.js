import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SignUp } from './components/SignUp';
import { RegisterForm } from './components/RegisterForm';
import { NavBar } from './components/NavBar';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPosts:[],
      posts: [],
      userId: 0,
    };
    this.changeUserId = this.changeUserId.bind(this);
    this.changePosts = this.changePosts.bind(this);
    this.changeMyPosts = this.changeMyPosts.bind(this);
  }

  changeUserId(newUserId) {
    this.setState({
      userId: newUserId
    });
  }

  changePosts(newPosts) {
    this.setState({
      posts: newPosts
    });
  }

  changeMyPosts(newPosts) {
    this.setState({
      myPosts: newPosts
    });
  }

  render() {
    return (
      <Container style={{ marginTop: 40 }}>
        <NavBar userId={this.state.userId} posts={this.state.posts} onChangePosts={this.changePosts} onChangeMyPosts={this.changeMyPosts} />
        <Route exact path="/posts" render={() => <Posts posts={this.state.posts} />} />
        <Route exact path="/login" render={() => <RegisterForm onChange={this.changeUserId} onChangePosts={this.changePosts} onChangeMyPosts={this.changeMyPosts} />} />
        <Route exact path="/sign-up" component={SignUp} />
      </Container>
    );
  }
}

export default App;


  

 
