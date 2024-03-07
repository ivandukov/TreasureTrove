import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import GiveawayPage from "./pages/GiveawayPage";
import SettingsPage from "./pages/SettingsPage";
import SearchResultPage from "./pages/SearchResultPage";
import LoggedOutHomepage from "./components/homepage/LoggedOutHomepage";
import LoggedInHomepage from "./components/homepage/LoggedInHomepage";
import CreateGiveawayPage from "./pages/CreateGiveawayPage";
import SavedPage from "./pages/SavedPage";
import MessagePage from "./pages/MessagesPage";

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
            <Route path="/submit" element={<CreateGiveawayPage/>}/>
            <Route path="/saved" element={<SavedPage/>}/>
            <Route path="/messages" element={<MessagePage/>}/>
        </Routes>
    </Router>;
}
