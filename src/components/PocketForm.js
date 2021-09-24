import React, { Component } from "react";
import { connect } from "react-redux";

class PocketForm extends Component {

    constructor() {
        super();
        this.state = {
            pocket: '',
        }
    }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Stitch New Pocket" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default PocketForm;
