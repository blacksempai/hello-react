import classes from './Profile.module.css';
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <Posts/>
        </div>        
    );   
}

export default Profile;