import React from 'react';
import { Row, Col } from 'reactstrap';
import If from '../../components/If';

export default class Login extends React.Component {
    state = {
        username: '',
        password: '',
        loginError: '',
    };

    onChange = (e) => {
        const {
            name,
            value,
        } = e.target;
        if (name === 'username') {
            this.setState({
                username: value,
            });
        }
        if (name === 'password') {
            this.setState({
                password: value,
            });
        }
    }

    onLogin = (e) => {
        e.preventDefault();
        const {
            username,
            password,
        } = this.state;

        if (username === 'shaadi' && password === '123') {
            this.setState({
                isLoggedIn: true,
            }, () => {
                this.props.callBack(true);
            });
            window.localStorage.setItem('loggedIn', true);
        } else {
            this.setState({
                loginError: 'Invalid credentials',
            });
        }
    }

    render() {
        const {
            loginError,
        } = this.state;

        return(
            <Row>
                <If condition={loginError}>
                    <Col xs="8">
                        <span className="error">{loginError}</span>
                    </Col>
                </If>
                <Col xs="8">
                    <form onSubmit={this.onLogin}>
                        <Row>
                            <Col xs="6">
                                <input type="text" name="username" placeholder="Username" onChange={this.onChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <input type="password" name="password" placeholder="Password" onChange={this.onChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button type="submit" onClick={this.onLogin}>Login</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        );
    }
}
