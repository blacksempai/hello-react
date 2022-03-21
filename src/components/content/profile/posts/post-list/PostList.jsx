import Post from './post/Post';
import classes from './PostList.module.css';

const PostList = (props) => {
    let postList = props.posts.map(p => <Post likes={p.likes} message={p.message}/>);

    return (
        <div className={classes.posts_list}>
            {postList}
        </div>
    );
}

export default PostList;