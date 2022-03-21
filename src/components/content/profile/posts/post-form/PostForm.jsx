import React from 'react';
import classes from './PostForm.module.css';

const PostForm = () => {
    const postRef = React.createRef();
    const postSubmit = () => {
        let post = postRef.current.value;
        alert(post);
    }

    return (
        <div className={classes.post_form}>
            <h2>My Posts</h2>
            <form onSubmit={postSubmit}>
                <textarea name="post" id={classes.post} rows="4" placeholder="your news..." ref={postRef}></textarea>
                <input id={classes.post_submit} type="submit" value="Send"/>
                <div className="clearfix"></div>
            </form>
        </div>
    );
}

export default PostForm;