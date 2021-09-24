import React, { Component } from "react";
import Pocket from "./Pocket.js";

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
      </>
    );
  }
}

export default PocketCollection;
