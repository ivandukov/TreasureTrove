import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";
import UserSettingsPage from "./pages/UserSettingsPage";

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
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/product" element={<ProductPage/>}/>
            <Route path="/settings" element={<UserSettingsPage/>}/>
        </Routes>
    </Router>;
}
