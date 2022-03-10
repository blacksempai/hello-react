import './ProfileInfo.css'
import ava from './Cat03.jpg'

const ProfileInfo = () => {
    return (
        <div className='ProfileInfo'>
            <img className='Ava' src={ava} alt="ava" />
            <div className="ProfileDetails">
                <h2>Andriy Moskalenko</h2>
                <p>Date of birth: <span id='date'>4 April</span></p>
                <p>City: <span id='date'>Reshetylivka</span></p>
                <p>Education: <span id='date'>KNUTD CS Master</span></p>
                <p>Web site: <span id='date'>undefined</span></p>
            </div>

        </div>
    );
}

export default ProfileInfo;