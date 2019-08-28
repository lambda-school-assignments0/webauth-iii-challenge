import React, { Component } from "react";
import { connect } from "react-redux";

import { signup } from "../actions";

import { NavLink } from "react-router-dom";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

class Signup extends Component {
    state = {
        credentials: {
            username: "",
            password: "",
            department: ""
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

    handleSignup = e => {
        e.preventDefault();
        this.props
            .signup(this.state.credentials)
            .then(() => this.props.history.push("/signin"));
    };

    render() {
        return (
            <Form className="signup" onSubmit={this.handleSignup}>
                <h2>Sign Up!</h2>
                <FormGroup>
                    <Label>Department</Label>
                    <Input
                        type="text"
                        name="department"
                        value={this.state.credentials.department}
                        onChange={this.handleTextChange}
                    />
                </FormGroup>
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
                    Already have an account? Sign in{" "}
                    <NavLink to="/signin">here!</NavLink>
                </FormText>
                <Button color="primary">Sign Up</Button>
            </Form>
        );
    }
}

export default connect(
    null,
    { signup }
)(Signup);
