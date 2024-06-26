import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./components/loginpage/LoginPage";
import RegisterPage from "./components/registerpage/RegisterPage";
import ProfilePage from "./components/profilepage/ProfilePage";
import GiveawayPage from "./components/giveawaypage/GiveawayPage";
import SettingsPage from "./components/settingspage/SettingsPage";
import SearchResultPage from "./components/searchresultpage/SearchResultPage";
import LoggedOutHomepage from "./components/homepage/LoggedOutHomepage";
import LoggedInHomepage from "./components/homepage/LoggedInHomepage";
import CreateGiveawayPage from "./components/creategiveawaypage/CreateGiveawayPage";
import SavedPage from "./components/savedpage/SavedPage";
import MessagePage from "./components/messagepage/MessagesPage";
import ChatPage from "./components/chatpage/ChatPage";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";
import { ReactElement } from "react";
import UserPage from "./components/profilepage/UserPage";

/**
 * An array of route objects for the application.
 * Each object in the array represents a route in the application.
 *
 * @type {Array<{path: string, element: JSX.Element}>}
 *
 * @property {string} path - The path of the route.
 * @property {ReactElement} element - The React component that should be rendered when the route is matched.
 *
 * @example
 * // Define a route for the homepage
 * {path: "/", element: <Homepage/>}
 */
const routes: Array<{ path: string; element: ReactElement }> = [
    { path: "/", element: <LoggedOutHomepage /> },
    { path: "/home", element: <LoggedInHomepage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/user", element: <UserPage /> },
    { path: "/giveaway", element: <GiveawayPage /> },
    { path: "/settings", element: <SettingsPage /> },
    { path: "/results", element: <SearchResultPage /> },
    { path: "/submit", element: <CreateGiveawayPage /> },
    { path: "/saved", element: <SavedPage /> },
    { path: "/messages", element: <MessagePage /> },
    { path: "/chat", element: <ChatPage /> },
    { path: "/notfound", element: <NotFoundPage /> },
];

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Router>
    );
}
