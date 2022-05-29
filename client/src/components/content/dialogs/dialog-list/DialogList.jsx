import classes from './DialogList.module.css';
import DialogItem from './dialog-item/DialogItem';

const DialogList = (props) => {
    let dialogList =  props.dialogs.map(d => <li><DialogItem key={d.id} id={d.id} name={d.name}/></li>)
    
    return (
        <nav className={classes.dialogs_nav}>
            <h2>Dialogs</h2>
            <ul>
                {dialogList}
            </ul>
        </nav>
    );
}

export default DialogList;