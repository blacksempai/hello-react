import { connect } from 'react-redux';
import Navigation from './Navigation';

let mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Navigation);