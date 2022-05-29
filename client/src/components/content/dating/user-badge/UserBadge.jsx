import classes from './UserBadge.module.css'
import manAva from './M.svg'
import womanAva from './W.svg'

const UserBadge = (props) => {

    let dateUser = () => {
        props.date(props.user._id);
    }

    let ava = props.user.sex === 'M' ? manAva : womanAva;
    return (
        <div className={classes.userBadge}>
            <div className={classes.userPhotoContainer}>
                {props.user.photoURL ? <img src={props.user.photoURL} alt="ava"/> : <img src={ava} alt="ava"/> }
            </div>
            <div className={classes.userInfoContainer}>
                <h2>{props.user.name}</h2>
                <p><a href={'mailto:'+props.user.email}>{props.user.email}</a></p>
                <p>City: {props.user.city}</p>
                <p>Education: {props.user.education}</p>
                <p>Birth Date: {props.user.birthDate?.slice(0,10)}</p>
                <p>Site: <a href={props.user.site}>{props.user.site}</a></p>
                {props.user.dating ? <button disabled>Date</button> : <button onClick={dateUser}>Date</button> }
            </div>
        </div>
    )
}

export default UserBadge;