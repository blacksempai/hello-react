import { Component } from "react";
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from "../../common/hocs/withRoutes";
import { setProfile } from '../../../redux/profilePageReducer'

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.setProfile(this.props.params.id);
    }

    render() {
        return(
            <Profile 
                {...this.props}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        email: state.profilePage.email,
        name: state.profilePage.name,
        photoURL: state.profilePage.photoURL,
        sex: state.profilePage.sex,
        birthDate: state.profilePage.birthDate,
        city: state.profilePage.city,
        education: state.profilePage.education,
        site: state.profilePage.site,
        isFetching: state.profilePage.isFetching
    }
}



export default connect(mapStateToProps, {setProfile} )(withRouter(ProfileContainer))