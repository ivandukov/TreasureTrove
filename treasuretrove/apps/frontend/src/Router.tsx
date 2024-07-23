import ChatPage from "@components/chatpage/ChatPage";
import CreateGiveawayPage from "@components/creategiveawaypage/CreateGiveawayPage";
import GiveawayPage from "@components/giveawaypage/GiveawayPage";
import LoggedInHomepage from "@components/homepage/LoggedInHomepage";
import LoggedOutHomepage from "@components/homepage/LoggedOutHomepage";
import LoginPage from "@components/loginpage/LoginPage";
import MessagePage from "@components/messagepage/MessagesPage";
import NotFoundPage from "@components/notfoundpage/NotFoundPage";
import ProfilePage from "@components/profilepage/ProfilePage";
import UserPage from "@components/profilepage/UserPage";
import RegisterPage from "@components/registerpage/RegisterPage";
import SavedPage from "@components/savedpage/SavedPage";
import SearchResultPage from "@components/searchresultpage/SearchResultPage";
import SettingsPage from "@components/settingspage/SettingsPage";
import { ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
                    <Route 
                        key={path} 
                        path={path} 
                        element={element}
                    />
                ))}
            </Routes>
        </Router>
    );
}
