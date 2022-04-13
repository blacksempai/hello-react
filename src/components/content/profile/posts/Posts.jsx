import classes from './Posts.module.css';
import PostList from './post-list/PostList';
import PostForm from './post-form/PostForm';

const Posts = (props) => {
    return (
        <div>
            <PostForm addPost={props.addPost} changeNewPostText={props.changeNewPostText} newPostText={props.state.newPostText}/>
            <PostList posts={props.state.posts} addLike={props.addLike}/>
        </div>
    );
}

export default Posts;