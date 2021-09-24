export const fetchPockets = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_POCKETS" });
    fetch("http://localhost:3000/pockets")
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ADD_POCKETS", pockets: response.JSON });
      });
  };
};
