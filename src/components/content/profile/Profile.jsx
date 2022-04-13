import classes from './Profile.module.css';
import ProfileInfo from './profile-info/ProfileInfo';
import Posts from './posts/Posts';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <Posts state={props.state} addPost={props.addPost} changeNewPostText={props.changeNewPostText} addLike={props.addLike}/>
        </div>        
    );   
}

export default Profile;