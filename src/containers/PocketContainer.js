import "../bootstrap1.min.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPockets } from "../actions/pocketActions";
import PocketCollection from "../components/PocketCollection";
import { Modal, Button } from "react-bootstrap";
import PocketForm from "../components/PocketForm";
import { Route } from "react-router-dom";

class PocketContainer extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    console.log(this.props);
    this.props.fetchPockets();
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    console.log(this.props.pockets);

    return (
      <div>
        <PocketCollection pockets={this.props.pockets} />
        <Button onClick={this.handleShow}>Create Pocket</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Stitch a New Pocket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PocketForm handleClose={this.handleClose} />
          </Modal.Body>
        </Modal>
        <Route
          path="/pocket/:id"
          render={() => <PocketPage collection={this.props.pockets} />}
        />
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
