import DialogList from './dialog-list/DialogList';
import classes from './Dialogs.module.css';
import Messanges from './messanges/Messages';

const Dialogs = () => {
    return (
        <div className={classes.dialogs_grid}>
            <DialogList />
            <Messanges />
        </div>
    );
}

export default Dialogs;