import React, { Component } from 'react';
import axios from 'axios';
import UserParams from './UserParams';
import { Link } from 'react-router-dom';

class UsersListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySubSection: false,
            address: this.props.address
        };
        this.delete = this.delete.bind(this);
        this.toggleSubSection = this.toggleSubSection.bind(this);
    }
    
    delete() {
        axios.delete('http://localhost:4000/users/' + this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
    }

    tabData(){
        return <UserParams userParams={this.props.indUser} key={this.props.indUser.id} />
    }

    toggleSubSection() {
        this.setState({
          displaySubSection: !this.state.displaySubSection
        });
    }

    addressBuilding() {
        this.setState({
          address: this.props.address + this.props.indUser.id
        })
    }
  
    render() {
        return (
            <div>
                <button type="button" className="list-group-item list-group-item-action pl-4" onClick={this.toggleSubSection}>{"Пользователь " + this.props.indUser.id}</button>
                { this.state.displaySubSection && this.tabData() }
            </div>
        );
    }
}

export default UsersListing;