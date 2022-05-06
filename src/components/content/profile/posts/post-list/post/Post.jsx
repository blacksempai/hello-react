import classes from './Post.module.css';
import ava from '../../../profile-info/Cat03.jpg'
import {addLikeActionCreator} from '../../../../../../redux/profilePageReducer'

const Post = (props) => {

    const like = () => {
        let action = addLikeActionCreator(props.id);
        props.dispatch(action);
    }

    return (
        <div className={classes.post}>
            <img src={ava} alt="ava" />
            <div className={classes.text}>
                <p>{props.text}</p>
                <div><button onClick={like}>👍</button><span>{props.likes}</span></div>    
            </div>

        </div>
    );
}

export default Post;