import { connect } from 'react-redux';
import Content from './Content';

let mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Content);