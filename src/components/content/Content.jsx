import { Route, Routes } from 'react-router-dom';
import classes from './Content.module.css';
import Profile from './profile/Profile';
import Dialogs from './dialogs/Dialogs';

const Content = (props) => {
    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/dialogs/*" element={<Dialogs data={props.data}/>}/>
            </Routes>
        </main>
    );
}

export default Content;
