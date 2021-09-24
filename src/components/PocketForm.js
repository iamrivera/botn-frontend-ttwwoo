import React, { Component } from "react";
import { connect } from "react-redux";
import { createPocket, fetchPockets } from "../actions/pocketActions.js";

class PocketForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      imglink: "",
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.success !== prevProps.success) {
      this.props.fetchPockets();
    }
  }

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createPocket({
      pocket: {
        name: this.state.name,
        description: this.state.description,
        imglink: this.state.imglink,
      },
    });
    this.props.handleClose();
  };

  render() {
    return (
      <div style={{ maxWidth: "20rem" }}>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name" className="form-label mt-4">
                Pocket Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Pocket's Name"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="form-label mt-4">
                Pocket Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="What are you putting in your pocket?"
                value={this.state.description}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="imglink" className="form-label mt-4">
                Pocket Image
              </label>
              <input
                type="text"
                className="form-control"
                id="imglink"
                placeholder="Add some flair to your pocket"
                value={this.state.imglink}
                onChange={this.handleChange}
              ></input>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
        {/* {this.state.name}
        {this.state.description}
        {this.state.imglink} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pockets: state.pockets,
    loading: state.post_loading,
    success: state.post_success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPocket: (formData) => dispatch(createPocket(formData)),
    fetchPockets: () => dispatch(fetchPockets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PocketForm);
