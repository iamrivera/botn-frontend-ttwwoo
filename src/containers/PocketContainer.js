import "../bootstrap1.min.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPockets } from "../actions/pocketActions";
import PocketCollection from "../components/PocketCollection";
import { Route, Switch } from "react-router-dom";
import PocketPage from "../components/routes/PocketPage";

class PocketContainer extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchPockets();
  }

  render() {
    // console.log(this.props.pockets);

    return (
      <div>
        <Switch>
          <Route
            exact path="/pockets"
            render={(routerProps) => (
              <PocketCollection {...routerProps} pockets={this.props.pockets} />
            )}
          />
          <Route
            path="/pockets/:id"
            render={(routerProps) => <PocketPage {...routerProps} collection={this.props.pockets} />}
          />
        </Switch>
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
