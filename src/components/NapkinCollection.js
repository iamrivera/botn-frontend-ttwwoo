import React, { Component } from "react";
import Napkin from "./Napkin";
import { Modal, Button } from "react-bootstrap";

class NapkinCollection extends Component {
  renderNapkins = () =>
    this.props.napkins.map((napkin, idx) => <Napkin key={idx} item={napkin} />);

  render() {
    return (
      <>
        <div>
          <p></p>
          {this.renderNapkins()}
        </div>
      </>
    );
  }
}

export default NapkinCollection;
