import React, { Component } from "react";

import { Collapse, ListGroupItem } from "reactstrap";

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false
        };
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
    };

    render() {
        return (
            <ListGroupItem className="user-list-item">
                <h4 className="user-list-name" onClick={this.toggle}>{this.props.user.username}</h4>
                <Collapse isOpen={this.state.collapse}>
                    <p><strong>Department: </strong>{this.props.user.department}</p>
                </Collapse>
            </ListGroupItem>
        )
    }
}

export default User;
