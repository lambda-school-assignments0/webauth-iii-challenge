import React, { Component } from "react";

import { connect } from "react-redux";

import User from "./User.js";

import { getUsersList, signout } from "../actions";

import { ListGroup, Button } from "reactstrap";

class Users extends Component {
    handleSignout = e => {
        this.props
            .signout();
        window.location.reload(); // hotfix
    };

    componentDidMount() {
        this.props.getUsersList(localStorage.getItem("token"));
    }

    render() {
        return (
            <div className="users">
                <h2>List of Users:</h2>
                <ListGroup className="user-list">
                    {this.props.users.map(user => {
                        return <User key={user.id} user={user} />;
                    })}
                </ListGroup>
                <Button color="danger" onClick={this.handleSignout}>
                    Sign Out
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
    isSigningUp: state.isSigningUp,
    isLoggingIn: state.isLoggingIn,
    isFetchingUsers: state.isFetchingUsers,
    error: state.error
});

export default connect(
    mapStateToProps,
    { getUsersList, signout }
)(Users);
