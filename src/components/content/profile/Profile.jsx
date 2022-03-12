import classes from './Profile.module.css';
import ProfileInfo from './profile-info/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <img className={classes.profile_picture} src="http://placekitten.com/g/1200/250" alt="profile background" />
            <ProfileInfo />
        </div>        
    );   
}

export default Profile;