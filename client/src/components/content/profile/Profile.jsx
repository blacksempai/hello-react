import classes from './Profile.module.css';
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';
import Loader from './../../common/loader/Loader';

const Profile = (props) => {
    if(props.isFetching) {
        return <Loader/>
    }
    return (
        <div className={classes.profile}>
            <ProfileInfo 
                email={props.email}
                name={props.name}
                photoURL={props.photoURL}
                sex={props.sex}
                birthDate={props.birthDate}
                city={props.city}
                education={props.education}
                site={props.site}
            />
            <Posts/>
        </div>        
    );   
}

export default Profile;