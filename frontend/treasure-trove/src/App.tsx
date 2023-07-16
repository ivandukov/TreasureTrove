import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";

/**
 * defines all accessible links/pages 
 * @returns Router containing all links to the pages
 */
function App() {

   return (
      <Router>
         <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/product" element={<ProductPage/>}/>
         </Routes>
      </Router>
   );
}

export default App;
