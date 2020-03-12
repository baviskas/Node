import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { connect } from "react-redux";
import {fetchUser} from "./redux/actions";
/*
import config from "./config.json";
import axios from "axios";
*/

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    /*
     const { data: users } = await axios.get(config.apiEndpoint);
     this.setState({ users });
     */
    this.props.dispatch(fetchUser());
  }

  render() {
    if (this.props.error) {
      toast.error("An error occurred.");
      return null;
    }
    return (
      <React.Fragment>
        <ToastContainer />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company && user.company.name}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  error: state.error,
  isLoading: state.loading
});

export default connect(mapStateToProps)(App);
