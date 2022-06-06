import {Routes, Route, Navigate} from 'react-router-dom'
import ProfileContainer from './components/content/profile/ProfileContainer';
import Dialogs from './components/content/dialogs/Dialogs';
import DatingContainer from './components/content/dating/DatingContainer';
import LoginContainer from './components/content/auth/login/LoginContainer';
import RegisterContainer from './components/content/auth/register/RegisterContainer';


export const useRouter = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
        <Routes>
            <Route path="/profile" element={<ProfileContainer/>}/>
            <Route path="/profile/:id" element={<ProfileContainer/>}/>
            <Route path="/dialogs/*" element={<Dialogs/>}/>
            <Route path="/dating" element={<DatingContainer/>}/>
            <Route path="*" element={<Navigate to ="/profile" />}/>
        </Routes>
        )
    }

    return (
    <Routes>
        <Route path="/login" element={<LoginContainer/>}/>
        <Route path="/register" element={<RegisterContainer/>}/>
        <Route path="*" element={<Navigate to ="/login" />}/>
    </Routes>
    )
}