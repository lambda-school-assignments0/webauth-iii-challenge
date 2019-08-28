import React, { Component } from "react";
import { connect } from "react-redux";

import { signin } from "../actions";

import { NavLink } from "react-router-dom";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

class Signin extends Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleTextChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSignin = e => {
        e.preventDefault();
        this.props
            .signin(this.state.credentials)
            .then(() => this.props.history.push("/users"));
    };

    render() {
        return (
            <Form className="signin" onSubmit={this.handleSignin}>
                <h2>Sign In!</h2>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>
                <FormText>
                    Don't have an account? Sign up{" "}
                    <NavLink to="/signup">here!</NavLink>
                </FormText>
                <Button color="primary">Sign In</Button>
            </Form>
        );
    }
}

export default connect(
    null,
    { signin }
)(Signin);
