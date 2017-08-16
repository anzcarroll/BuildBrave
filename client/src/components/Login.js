import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to BuildBrave</h1>
                <h2 >Login to Your Account</h2>
                <form>
                    <input type="email" placeholder="email" name="username" required/>
                    <input type="password" placeholder="password" name="password" required/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;

