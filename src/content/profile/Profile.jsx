import './Profile.css';
import ProfileInfo from './profile-info/ProfileInfo';

const Profile = () => {
    return (
        <div className='Profile'>
            <img className='ProfilePicture' src="http://placekitten.com/g/1200/250" alt="profile background" />
            <ProfileInfo />
        </div>        
    );   
}

export default Profile;