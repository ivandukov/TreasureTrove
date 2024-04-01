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
import ChatPage from "./pages/ChatPage";
import NotFoundPage from "./pages/NotFoundPage";
import {ReactElement} from "react";

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
const routes: Array<{ path: string; element: ReactElement; }> = [
    {path: "/", element: <LoggedOutHomepage/>},
    {path: "/home", element: <LoggedInHomepage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/register", element: <RegisterPage/>},
    {path: "/user", element: <ProfilePage/>},
    {path: "/giveaway", element: <GiveawayPage/>},
    {path: "/settings", element: <SettingsPage/>},
    {path: "/results", element: <SearchResultPage/>},
    {path: "/submit", element: <CreateGiveawayPage/>},
    {path: "/saved", element: <SavedPage/>},
    {path: "/messages", element: <MessagePage/>},
    {path: "/chat", element: <ChatPage/>},
    {path: "/notfound", element: <NotFoundPage/>},
];

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {routes.map(({path, element}) => (
                    <Route key={path} path={path} element={element}/>
                ))}
            </Routes>
        </Router>
    );
}
