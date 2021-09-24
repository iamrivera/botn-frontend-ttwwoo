const pocketsReducer = (
  state = { pockets: [], get_loading: false, post_loading: false, post_success: false },
  action
) => {
  switch (action.type) {
    case "GET_POCKETS_REQUEST":
      return {
        ...state,
        pockets: [...state.pockets],
        get_loading: true,
      };
    case "GET_POCKETS_SUCCESS":
      return {
        ...state,
        pockets: action.pockets,
        get_loading: false,
      };
    case "POST_POCKET_REQUEST":
      return {
        ...state,
        post_loading: true,
      };
    case "POST_POCKET_SUCCESS":
      return {
        ...state,
        post_loading: false,
        post_success: true,
      };
    default:
      return state;
  }
};

export default pocketsReducer;
