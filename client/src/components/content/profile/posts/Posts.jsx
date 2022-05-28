import classes from './Posts.module.css';
import PostFormContainer from './post-form/PostFormContainer';
import PostListContainer from './post-list/PostListContainer';

const Posts = (props) => {
    return (
        <div>
            <PostFormContainer />
            <PostListContainer />
        </div>
    );
}

export default Posts;