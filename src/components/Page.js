import React, { Fragment } from "react";
import NavBar from "./NavBar";
import RightPane from "./RightPane";

class Page extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <RightPane />
      </Fragment>
    );
  }
}

export default Page;
