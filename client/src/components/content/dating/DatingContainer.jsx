import { Component } from "react";
import { connect } from 'react-redux';
import { changePage, setUsers, dateUser, setFetching }  from '../../../redux/datingPageReducer';
import Dating from './Dating';
import axios from "axios";


class DatingContainer extends Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`/api/users`)
        .then((res)=> {
            this.props.setUsers(res.data.users, res.data.total);
            this.props.setFetching(false);
        })
    }

    changePage = (page) => {
        this.props.setFetching(true);
        this.props.changePage(page);
        axios.get(`/api/users?page=${page}`)
        .then((res)=> {
            this.props.setUsers(res.data.users, res.data.total);
            this.props.setFetching(false);
        })
    }

    render() { 
        return <Dating 
            total={this.props.total}
            users={this.props.users}
            limit={this.props.limit}
            currentPage={this.props.currentPage}
            changePage={this.changePage}
            dateUser={this.props.dateUser}
            isFetching={this.props.isFetching}
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

export default connect(mapStateToProps,{ setUsers, changePage, dateUser, setFetching })(DatingContainer);;