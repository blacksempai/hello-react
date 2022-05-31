import { Component } from "react";
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from "../../common/hocs/withRoutes";
import { setState, setFetching } from '../../../redux/profilePageReducer'

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.setFetching(true);
        let id = this.props.params.id || '62929faf686f20a022b511a4';
        axios.get(`/api/profile/${id}`)
        .then((res)=>{
            this.props.setState(res.data);
            this.props.setFetching(false);
        })
    }

    render() {
        return(
            <Profile 
            email={this.props.email}
            name={this.props.name}
            photoURL={this.props.photoURL}
            sex={this.props.sex}
            birthDate={this.props.birthDate}
            city={this.props.city}
            education={this.props.education}
            site={this.props.site}
            isFetching={this.props.isFetching}
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
        birthDate: state.profilePage.profile.birthDate,
        city: state.profilePage.profile.city,
        education: state.profilePage.profile.education,
        site: state.profilePage.profile.site,
        isFetching: state.profilePage.isFetching
    }
}



export default connect(mapStateToProps, {setState, setFetching} )(withRouter(ProfileContainer))