import { Route, Routes } from 'react-router-dom';
import classes from './Content.module.css';
import Dialogs from './dialogs/Dialogs';
import DatingContainer from './dating/DatingContainer';
import ProfileContainer from './profile/ProfileContainer';

const Content = (props) => {
    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/profile" element={<ProfileContainer/>}/>
                <Route path="/profile/:id" element={<ProfileContainer/>}/>
                <Route path="/dialogs/*" element={<Dialogs/>}/>
                <Route path="/dating" element={<DatingContainer/>}/>
            </Routes>
        </main>
    );
}

export default Content;
