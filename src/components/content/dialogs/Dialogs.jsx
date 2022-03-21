import DialogList from './dialog-list/DialogList';
import classes from './Dialogs.module.css';
import Messanges from './messanges/Messages';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs_grid}>
            <DialogList dialogs={props.state.dialogs}/>
            <Messanges messanges={props.state.messanges}/>
        </div>
    );
}

export default Dialogs;