import './Navigation.css';

const Header = () => {
    return (
            <nav className='Navigation'>
                <ul>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Messages</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Music</a></li>
                    <li className='Settings'><a href="/">Settings</a></li>
                </ul>
            </nav>
    );
}

export default Header;