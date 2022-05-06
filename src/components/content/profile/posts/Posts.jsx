import classes from './Posts.module.css';
import PostList from './post-list/PostList';
import PostForm from './post-form/PostForm';

const Posts = (props) => {
    return (
        <div>
            <PostForm dispatch={props.dispatch} newPostText={props.state.newPostText}/>
            <PostList posts={props.state.posts} dispatch={props.dispatch}/>
        </div>
    );
}

export default Posts;