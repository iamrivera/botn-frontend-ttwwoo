import React, { Component } from "react";
import { connect } from "react-redux";

class PocketForm extends Component {
  constructor() {
    super();
    this.state = {
      pocket: "",
    };
  }

  handleChange(event) {
    this.setState({
      pocket: event.target.value,
    });
  }
  render() {
    return (
      <div style={{ maxWidth: "20rem" }}>
        <form>
          <fieldset>
            <legend>Stitch a New Pocket</legend>
            <div className="form-group">
              <label htmlFor="pocketName" className="form-label mt-4">
                Pocket Name
              </label>
              <input
                type="text"
                className="form-control"
                id="pocketName"
                placeholder="Enter Pocket's Name"
                onChange={(event) => this.handleChange(event)}
              ></input>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PocketForm;
