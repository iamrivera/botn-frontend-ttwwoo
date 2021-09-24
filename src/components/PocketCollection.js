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
          <p></p>
          {this.renderPockets()}
        </div>
      </>
    );
  }
}

export default PocketCollection;
