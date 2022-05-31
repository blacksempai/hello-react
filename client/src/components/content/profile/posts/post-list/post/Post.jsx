import classes from './Post.module.css';
import ava from '../../../profile-info/Cat03.jpg'

const Post = (props) => {
    const like = () => {
        props.addLike(props.id);
    }

    return (
        <div className={classes.post}>
            <img src={ava} alt="ava" />
            <div className={classes.text}>
                <p>{props.text}</p>
                <div><button onClick={like}>👍</button><span>{props.likes.length}</span></div>    
            </div>

        </div>
    );
}

export default Post;