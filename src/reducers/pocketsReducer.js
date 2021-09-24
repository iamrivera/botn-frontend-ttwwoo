const pocketsReducer = (state = { pockets: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_POCKETS":
      return {
        ...state,
        pockets: [...state.pockets],
        loading: true,
      };
    case "ADD_POCKETS":
      return {
        ...state,
        pockets: action.pockets,
        loading: false,
      };
    default:
      return state;
  }
};

export default pocketsReducer; 
