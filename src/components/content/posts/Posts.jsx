import classes from './Posts.module.css';
import PostsList from './posts-list/PostsList';

const Posts = () => {
    return (
        <div className={classes.posts}>
            <h2>My Posts</h2>
            <form action="">
                <textarea name="post" id={classes.post} rows="4" placeholder="your news..."></textarea>
                <input id={classes.post_submit} type="submit" value="Send"/>
                <div className="clearfix"></div>
            </form>
            <PostsList />
        </div>
    );
}

export default Posts;