import classes from './Header.module.css';
import logo from './logo.png'

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt="M" />    
        </header>
    );
}

export default Header;