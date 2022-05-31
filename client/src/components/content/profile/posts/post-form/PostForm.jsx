import React from 'react';
import classes from './PostForm.module.css';

const PostForm = (props) => {
    const postRef = React.createRef();
    const textChanged = () => {
        let text = postRef.current.value;
        props.changeNewPostText(text);
    }
    const addPost = (e) => {
        e.preventDefault();
        props.addPost();
    }

    return (
        <div className={classes.post_form}>
            <h2>My Posts</h2>
            <form onSubmit={addPost}>
                <textarea onChange={textChanged} name="post" id={classes.post} rows="4" placeholder="your news..." ref={postRef} value={props.newPostText}></textarea>
                <input id={classes.post_submit} type="submit" value="Send"/>
                <div className="clearfix"></div>
            </form>
        </div>
    );
}

export default PostForm;