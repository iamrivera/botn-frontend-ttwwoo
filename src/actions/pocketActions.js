export const fetchPockets = () => {
  return (dispatch) => {
    dispatch({ type: "GET_POCKETS_REQUEST" });
    fetch("http://localhost:3000/pockets")
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "GET_POCKETS_SUCCESS", pockets: responseJSON });
      });
  };
};

export const createPocket = (formData) => {
  return (dispatch) => {
    dispatch({type: "POST_POCKET_REQUEST"});
    fetch("http://localhost:3000/pockets", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      dispatch({type: "POST_POCKET_SUCCESS"})
    })
  }
}
