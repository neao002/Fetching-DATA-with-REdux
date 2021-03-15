const SecondState = {
  users: [],
  user: {},
};
const postUserReducer = (state = SecondState, action) => {
  switch (action.type) {
    case "FETCH_USERS": //fetch posts array data from api
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default postUserReducer;
