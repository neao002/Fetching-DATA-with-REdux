import { Component } from "react";
import { fetchUsers } from "../actions/userActions";
import { connect } from "react-redux";

class Users extends Component {
  //   componentWillMount() {
  //     this.props.fetchUsers();
  //   }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <>
        <h1>All Users</h1>
        {this.props.users.map((user) => {
          return (
            <div key={user.id} style={{ borderBottom: "1px solid white" }}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          );
        })}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});
export default connect(mapStateToProps, { fetchUsers })(Users);
