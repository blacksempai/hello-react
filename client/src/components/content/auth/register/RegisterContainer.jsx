import { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../../redux/authReducer';

class RegisterContainer extends Component {

    onRegister = (e) => {
        e.preventDefault();
        let user = {
            email: e.target.email.value,
            password: e.target.password.value,
            sex: e.target.sex.value,
            name: e.target.name.value,
            photoURL: e.target.photoURL.value
        }
        this.props.register(user);
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.onRegister}>
                    <div><input type="email" name="email" id="email" placeholder="email"/></div>
                    <div><input type="password" name="password" id="password" placeholder="password"/></div>
                    <div><input type="text" name="name" id="name" placeholder="name"/></div>
                    <div><input type="url" name="photoURL" id="photoURL" placeholder="photoURL"/></div>
                    <div>
                        <label htmlFor="sexM">male:</label>
                        <input type="radio" name="sex" id="sexM" value="M"/>
                        <label htmlFor="sexM">female:</label>
                        <input type="radio" name="sex" id="sexW" value="W"/>
                    </div>
                    <div><input type="submit" /></div>
                </form>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,{register})(RegisterContainer);