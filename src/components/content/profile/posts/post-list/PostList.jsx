import Post from './post/Post';
import classes from './PostList.module.css';

const PostList = (props) => {
    let postList = props.posts.map(p => <Post key={p.id} id={p.id} likes={p.likes} text={p.text} addLike={props.addLike}/>);

    return (
        <div className={classes.posts_list}>
            {postList}
        </div>
    );
}

export default PostList;