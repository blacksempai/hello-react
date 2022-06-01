import { Component } from "react";
import { connect } from 'react-redux';
import { dateUser,  getUsers }  from '../../../redux/datingPageReducer';
import Dating from './Dating';

class DatingContainer extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    changePage = (page) => {
        this.props.getUsers(page);
    }

    render() { 
        return <Dating 
            {...this.props}
            changePage={this.changePage}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.datingPage.users,
        total: state.datingPage.total,
        currentPage: state.datingPage.currentPage,
        limit: state.datingPage.limit,
        isFetching: state.datingPage.isFetching
    }
}

export default connect(mapStateToProps,{ getUsers, dateUser })(DatingContainer);;