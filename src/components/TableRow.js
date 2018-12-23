import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {

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
            <tr>
            <td>
                {this.props.obj.first_name}
            </td>
            <td>
                {this.props.obj.last_name}
            </td>
            <td>
                {this.props.obj.email}
            </td>
            <td>
                <button className="btn btn-primary">Edit</button>
            </td>
            <td>
                <button onClick={this.delete} className="btn btn-danger">Delete</button>
            </td>
            </tr>
        );
    }
}

export default TableRow;