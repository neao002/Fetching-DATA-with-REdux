export const fetchUsers = () => (dispatch) => {
  // fetch all posts data from api
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((usersData) =>
      dispatch({
        type: "FETCH_USERS",
        payload: usersData,
      })
    );
};
