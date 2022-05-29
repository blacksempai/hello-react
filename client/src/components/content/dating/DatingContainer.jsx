import { connect } from 'react-redux';
import { changePageActionCreator, setUsersActionCreator } from '../../../redux/datingPageReducer';
import Dating from './Dating';
import { dateUserActionCreator } from './../../../redux/datingPageReducer';

let mapStateToProps = (state) => {
    return {
        users: state.datingPage.users,
        total: state.datingPage.total,
        currentPage: state.datingPage.currentPage,
        limit: state.datingPage.limit
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users, total) => { dispatch(setUsersActionCreator(users, total)) },
        changePage: (page) => { dispatch(changePageActionCreator(page)) },
        date: (id) => { dispatch(dateUserActionCreator(id)) }
    }
}

const DatingContainer = connect(mapStateToProps,mapDispatchToProps)(Dating);

export default DatingContainer;