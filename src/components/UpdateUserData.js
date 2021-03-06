import React, { Component } from "react";
import axios from 'axios';
 
class UpdateUserData extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
    this.state = {
      first_name: '',
      last_name: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                first_name: response.data.first_name, 
                last_name: response.data.last_name,
                email: response.data.email });
        })
        .catch(error => {
            console.log(error);
        })
    }

  onChangeFirstName(e){
    this.setState({
      first_name: e.target.value
    });
  }
  onChangeLastName(e){
    this.setState({
      last_name: e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const obj = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    }
    axios.put('http://localhost:4000/users/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.setState({
      first_name: '',
      last_name: '',
      email: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10}}>
        <h3>Add new user info</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input type="text" className="form-control"
            value={this.state.first_name}
            onChange={this.onChangeFirstName} />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input type="text" className="form-control"
            value={this.state.last_name}
            onChange={this.onChangeLastName} />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input type="text" className="form-control"
            value={this.state.email}
            onChange={this.onChangeEmail} />
          </div>
          <div className="form-group">
            <input type="submit" value="Register User" className="btn btn-primary" />
          </div>
        </form> 
      </div>
    );
  }
}

export default UpdateUserData;