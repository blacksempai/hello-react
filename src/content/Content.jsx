import './Content.css';
import Profile from './profile/Profile';
import Posts from './posts/Posts';

const Content = () => {
    return (
        <main className='Content'>
            <Profile />
            <Posts />
        </main>
    );
}

export default Content;
