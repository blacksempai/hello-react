import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../../redux/authReducer';

class LoginContainer extends Component {

    onLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        this.props.login(email, password);
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.onLogin}>
                    <input type="email" name='email' id='email'/>
                    <input type="password" name='password' id='password'/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,{login})(LoginContainer);