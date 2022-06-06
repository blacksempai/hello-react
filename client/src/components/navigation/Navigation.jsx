import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = (props) => {

    if(!props.isAuthenticated) {
        return (
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to="/login" className={({ isActive }) => isActive? classes.active: ''}>Login</NavLink></li>
                    <li><NavLink to="/register" className={({ isActive }) => isActive? classes.active: ''}>Register</NavLink></li>
                </ul>
            </nav>
        )
    }

    return (
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to="/profile" className={({ isActive }) => isActive? classes.active: ''}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className={({ isActive }) => isActive? classes.active: ''}>Dialogs</NavLink></li>
                    <li><NavLink to="/dating" className={({ isActive }) => isActive? classes.active: ''}>Dating</NavLink></li>
                    <li><NavLink to="/music" className={({ isActive }) => isActive? classes.active: ''}>Likes</NavLink></li>
                    <li className={classes.settings}><NavLink to="/settings" className={({ isActive }) => isActive? classes.active: ''}>Settings</NavLink></li>
                </ul>
            </nav>
    );
}

export default Navigation;