import classes from './Navigation.module.css';

const Header = () => {
    return (
            <nav className={classes.nav}>
                <ul>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Messages</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Music</a></li>
                    <li className={classes.settings}><a href="/">Settings</a></li>
                </ul>
            </nav>
    );
}

export default Header;