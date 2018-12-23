import React, { Component } from "react";
import axios from 'axios';
import TableRow from './TableRow';
 
const API = 'http://localhost:4000/users';

class Users extends Component {
  constructor(props){
    super(props);
    this.getDataFromServer = this.getDataFromServer.bind(this);
    this.state = {
      users: [],
      intervalIsSet: false
    };
  }

  componentDidMount(){
    this.getDataFromServer();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromServer, 1000);
      this.setState({ intervalIsSet: interval});
    }
  }

  getDataFromServer = () => {
    axios.get(API)
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  tabRow() {
    return this.state.users.map((object, i) => {
      return <TableRow obj={object} key={i} updateTable={this.updateTable} />
    })
  }

  render() {
    return (
      <div>
        <h2 align="center">Users</h2>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default Users;