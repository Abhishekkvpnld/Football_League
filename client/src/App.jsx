import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NoteFound";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ProtectRoute from "./components/ProtectRoute";


const App = () => {
  return (


    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<ProtectRoute> <HomePage /></ProtectRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App