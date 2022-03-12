import classes from './Posts.module.css';
import PostList from './post-list/PostList';
import PostForm from './post-form/PostForm';

const Posts = () => {
    return (
        <div>
            <PostForm />
            <PostList />
        </div>
    );
}

export default Posts;