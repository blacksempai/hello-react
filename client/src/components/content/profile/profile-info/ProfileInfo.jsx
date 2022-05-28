import classes from './ProfileInfo.module.css'
import ava from './Cat03.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <img className={classes.profile_picture} src="http://placekitten.com/g/1200/250" alt="profile background" />
            <div className={classes.profile_info}>
                <img className={classes.ava} src={ava} alt="ava" />
                <div className={classes.details}>
                    <h2>Andriy Moskalenko</h2>
                    <p>Date of birth: <span id='date'>4 April</span></p>
                    <p>City: <span id='date'>Reshetylivka</span></p>
                    <p>Education: <span id='date'>KNUTD CS Master</span></p>
                    <p>Web site: <span id='date'>undefined</span></p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;