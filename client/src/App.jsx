import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NoteFound";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ProtectRoute from "./components/ProtectRoute";
import Poll from "./pages/Poll";
import ProfilePage from "./pages/ProfilePage";


const App = () => {
  return (


    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProtectRoute> <ProfilePage /></ProtectRoute>} />
        <Route path="/poll" element={<Poll />} />
        <Route path="/" element={<ProtectRoute> <HomePage /></ProtectRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App