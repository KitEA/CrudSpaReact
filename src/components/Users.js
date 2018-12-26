import React, { Component } from "react";
import axios from 'axios';
import UsersListing from './UsersListing';
import { Link } from 'react-router-dom';
 
const API = 'http://localhost:4000/users';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      address: '',
      //indicatorField: '',
      intervalIsSet: false,
      displaySubSection: false
    };
    this.getDataFromServer = this.getDataFromServer.bind(this);
    this.toggleSubSection = this.toggleSubSection.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount(){
    this.getDataFromServer();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromServer, 5000);
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

  tabData() {
    return this.state.users.map((user, i) => {
      return <UsersListing address={this.address} indUser={user} key={i} />
    })
  }

  toggleSubSection() {
    this.setState({
      displaySubSection: !this.state.displaySubSection
    });
  }

  /* trackPath() {
    this.setState({
      indicatorField: 
    })
  } */

  addressBuilding() {
    this.setState({
      address: "/users"
    })
  }

  handleSelection() {
    this.toggleSubSection();
    
  }

  render() {
    return (
      <div>
        <h4>Редактор Классификаторов</h4>
        <div className="container"> 
          <div className="row">
            <div className="col-5 list-group">
              <button type="button" className="list-group-item list-group-item-action" onClick={this.handleSelection}>Пользователи</button>
              { this.state.displaySubSection && this.tabData() }
            </div>
            <div className="col-7">
              {/*<label for="elementOf">Выбран элемент классификатора:</label>
              <input value={this.state.indicatorField} type="text" id="elementOf" name="elementOf" readOnly />
    <br/> */}
              <Link to={"/addNewUser"}><button type="button" className="btn btn-primary disabled">Добавить</button></Link>
              <button type="button" className="btn btn-primary disabled">Добавить подэлемент</button>
              <button type="button" className="btn btn-primary disabled">Переименовать</button>
              <button type="button" className="btn btn-primary disabled">Удалить</button>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
 
export default Users;