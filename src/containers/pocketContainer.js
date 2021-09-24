import "../bootstrap1.min.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class pocketContainer extends Component {
  render() {
    console.log(this.props.pockets);
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pockets: state.pockets,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(pocketContainer);
