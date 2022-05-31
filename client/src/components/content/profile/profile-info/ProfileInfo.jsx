import classes from './ProfileInfo.module.css'
import manAva from '../../dating/user-badge/M.svg'
import womanAva from '../../dating/user-badge/W.svg'

const ProfileInfo = (props) => {
    let ava = props.photoURL ? props.photoURL : props.sex === 'M' ? manAva : womanAva;
    return (
            <div className={classes.profile_info}>
                <img className={classes.ava} src={ava} alt="ava" />
                <div className={classes.details}>
                    <h2>{props.name}</h2>
                    { props.birthDate ? <p>Date of birth: <span id='date'>{props.birthDate}</span></p>: null}
                    { props.city ? <p>City: <span id='city'>{props.city}</span></p> : null}
                    { props.education ? <p>Education: <span id='education'>{props.education}</span></p> : null}
                    { props.site ? <p>Web site: <a href={props.site} id='site'>{props.site}</a></p> : null }
                    { props.email ? <p>Email: <a href={'mailto:'+props.email} id='email'>{props.email}</a></p> : null }
                </div>
            </div>
    );
}

export default ProfileInfo;