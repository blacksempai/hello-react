import classes from './Posts.module.css';
import PostList from './post-list/PostList';
import PostForm from './post-form/PostForm';

const Posts = (props) => {
    return (
        <div>
            <PostForm />
            <PostList posts={props.posts}/>
        </div>
    );
}

export default Posts;