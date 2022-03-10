import Post from './post/Post';
import './PostsList.css';

const PostsList = () => {
    return (
        <div className='PostsList'>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default PostsList;