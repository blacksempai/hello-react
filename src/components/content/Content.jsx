import classes from './Content.module.css';
import Profile from './profile/Profile';
import Posts from './posts/Posts';

const Content = () => {
    return (
        <main className={classes.main}>
            <Profile />
            <Posts />
        </main>
    );
}

export default Content;
