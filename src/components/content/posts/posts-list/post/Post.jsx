import classes from './Post.module.css';
import ava from '../../../profile/profile-info/Cat03.jpg'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={ava} alt="ava" />
            <div className="content">
                <p>{props.message}</p>
                <div><button>👍</button><span>{props.likes}</span></div>    
            </div>

        </div>
    );
}

export default Post;