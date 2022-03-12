import classes from './PostForm.module.css';

const PostForm = () => {
    return (
        <div className={classes.post_form}>
            <h2>My Posts</h2>
            <form action="">
                <textarea name="post" id={classes.post} rows="4" placeholder="your news..."></textarea>
                <input id={classes.post_submit} type="submit" value="Send"/>
                <div className="clearfix"></div>
            </form>
        </div>
    );
}

export default PostForm;