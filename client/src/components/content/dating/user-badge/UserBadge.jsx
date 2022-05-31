import classes from './UserBadge.module.css'
import manAva from './M.svg'
import womanAva from './W.svg'
import { NavLink } from 'react-router-dom';

const UserBadge = (props) => {

    let dateUser = () => {
        props.date(props.user._id);
    }

    let ava = props.user.photoURL ? props.user.photoURL : props.user.sex === 'M' ? manAva : womanAva;
    return (
        <div className={classes.userBadge}>
            <div className={classes.userPhotoContainer}>
                <NavLink to={'/profile/'+props.user._id}>
                    <img src={ava} alt="ava"/>
                </NavLink>
            </div>
            <div className={classes.userInfoContainer}>
                <h2>{props.user.name}</h2>
                {props.user.dating ? <button disabled>Date</button> : <button onClick={dateUser}>Date</button> }
            </div>
        </div>
    )
}

export default UserBadge;