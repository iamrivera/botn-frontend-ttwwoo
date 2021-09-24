import React, { Component } from "react";
import Pocket from "./Pocket.js";
import { Modal, Button } from "react-bootstrap";
import PocketForm from "../components/PocketForm";

class PocketCollection extends Component {
  state = {
    show: false,
  };
  
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

  renderPockets = () =>
    this.props.pockets.map((pocket, idx) => <Pocket key={idx} item={pocket} />);

  render() {
    return (
      <>
        <div>
          <p></p>
          {this.renderPockets()}
          <Button onClick={this.handleShow}>Create Pocket</Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Stitch a New Pocket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PocketForm handleClose={this.handleClose} />
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}

export default PocketCollection;
