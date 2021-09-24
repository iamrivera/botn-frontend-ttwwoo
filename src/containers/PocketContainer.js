import "../bootstrap1.min.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPockets } from "../actions/pocketActions";
import FolderCollection from "../components/FolderCollection";

class PocketContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchPockets();
  }

  render() {
    console.log(this.props.pockets);

    return (
      <div className="App">
        <h1>Hello World</h1>
        <FolderCollection />
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPockets: () => dispatch(fetchPockets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PocketContainer);
