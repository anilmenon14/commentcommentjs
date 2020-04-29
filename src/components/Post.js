import React,{Fragment} from "react";
import NavBar from './NavBar';
import Content from './Content';

class Post extends React.Component {
  render() {
    return <Fragment>

    <NavBar/>
    <Content/>

    </Fragment>;
  }
}

export default Post;
