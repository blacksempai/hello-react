import classes from './DialogList.module.css';
import DialogItem from './dialog-item/DialogItem';

const DialogList = () => {
    return (
        <nav className={classes.dialogs_nav}>
            <h2>Dialogs</h2>
            <ul>
                <li><DialogItem id="1" name="Anya"/></li>
                <li><DialogItem id="2" name="Bogdan"/></li>
                <li><DialogItem id="3" name="Demon"/></li>
                <li><DialogItem id="4" name="Johney"/></li>
                <li><DialogItem id="5" name="Kurama"/></li>
            </ul>
        </nav>
    );
}

export default DialogList;