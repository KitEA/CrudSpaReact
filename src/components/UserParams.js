import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UsersParams extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    
    delete() {
        axios.delete('http://localhost:4000/users/' + this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <button type="button" className="list-group-item list-group-item-action pl-4">{this.props.userParams.first_name}</button>
                <button type="button" className="list-group-item list-group-item-action pl-4">{this.props.userParams.last_name}</button>
                <button type="button" className="list-group-item list-group-item-action pl-4">{this.props.userParams.email}</button>
            </div>
        );
    }
}

export default UsersParams;