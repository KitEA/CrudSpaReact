import React, { Component } from "react";
import axios from 'axios';
import TableRow from './TableRow';
 
class Users extends Component {
  constructor(props){
    super(props);
    this.state = {users: []};
  }
  componentDidMount(){
    axios.get('http://localhost:4000/users')
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  tabRow() {
    return this.state.users.map((object, i) => {
      return <TableRow obj={object} key={i} />
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