import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

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
            <Route path="/signup" element={<SignUpPage/>}/>
         </Routes>
      </Router>
   );
}

export default App;
