import './Posts.css';
import PostsList from './posts-list/PostsList';

const Posts = () => {
    return (
        <div className='Posts'>
            <h2>My Posts</h2>
            <form action="">
                <textarea name="post" id="post" rows="4" placeholder="your news..."></textarea>
                <input id='post-submit' type="submit" value="Send"/>
                <div className="clearfix"></div>
            </form>
            <PostsList />
        </div>
    );
}

export default Posts;