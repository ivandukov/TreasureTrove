import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import GiveawayPage from "./pages/GiveawayPage";
import SettingsPage from "./pages/SettingsPage";

/**
 * 
 * @returns Router containing all urls of the web app
 */
export default function AppRouter() {
    return <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/user" element={<ProfilePage/>}/>
            <Route path="/product" element={<GiveawayPage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
        </Routes>
    </Router>;
}
