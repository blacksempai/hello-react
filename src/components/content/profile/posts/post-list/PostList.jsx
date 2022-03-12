import Post from './post/Post';
import classes from './PostList.module.css';

const PostList = () => {
    return (
        <div className={classes.posts_list}>
            <Post likes="0" message=":33 OwO"/>
            <Post likes="8" message="The tuna is a sleek and streamlined fish, adapted for speed. It has two closely spaced dorsal fins on its back; VERYYYY TAAASSSTYYY!! MEUW"/>
            <Post likes="3" message="First Post"/>
        </div>
    );
}

export default PostList;