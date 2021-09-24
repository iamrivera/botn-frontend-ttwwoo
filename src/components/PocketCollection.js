import React, { Component } from "react";
import Pocket from "./Pocket.js";
import PocketForm from "./PocketForm.js";

class PocketCollection extends Component {
  renderPockets = () =>
    this.props.pockets.map((pocket, idx) => <Pocket key={idx} item={pocket} />);

  render() {
    return (
      <>
        <div>
          <h5>Pocket Collection</h5>
        </div>
        <h6>{this.renderPockets()}</h6>
        <PocketForm />
      </>
    );
  }
}

export default PocketCollection;
