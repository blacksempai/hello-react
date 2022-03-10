import './Post.css';
import ava from '../../../profile/profile-info/Cat03.jpg'

const Post = () => {
    return (
        <div className='Post'>
            <img src={ava} alt="ava" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus exercitationem vitae laboriosam, ducimus possimus explicabo quam optio atque. Rem, asperiores? Placeat reiciendis, officiis neque voluptas voluptatum nulla amet ipsa?
            </p>
        </div>
    );
}

export default Post;