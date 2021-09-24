import "../bootstrap1.min.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class PocketContainer extends Component {
  render() {
    console.log(this.props.pockets);
    componentDidMount() {
      console.log(this.props);
      this.props.fetchPockets();
    }

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

export default connect(mapStateToProps)(PocketContainer);
