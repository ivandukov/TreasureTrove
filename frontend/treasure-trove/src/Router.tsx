import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import GiveawayPage from "./pages/GiveawayPage";
import SettingsPage from "./pages/SettingsPage";
import SearchResultPage from "./pages/SearchResultPage";
import LoggedOutHomepage from "./components/homepage/LoggedOutHomepage";
import LoggedInHomepage from "./components/homepage/LoggedInHomepage";
/**
 * 
 * @returns Router containing all urls of the web app
 */
export default function AppRouter() {
    return <Router>
        <Routes>
            <Route path="/" element={<LoggedOutHomepage/>}/>
            <Route path="/home" element={<LoggedInHomepage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/user" element={<ProfilePage/>}/>
            <Route path="/product" element={<GiveawayPage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/results" element={<SearchResultPage/>}/>
        </Routes>
    </Router>;
}
