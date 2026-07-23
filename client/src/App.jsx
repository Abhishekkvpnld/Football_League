import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Users/LoginPage";
import ForgotPassword from "./pages/Users/ForgotPassword";
import NotFound from "./pages/Users/NoteFound";
import SignupPage from "./pages/Users/SignupPage";
import HomePage from "./pages/Users/HomePage";
import ProtectRoute from "./components/Users/ProtectRoute";
import Poll from "./pages/Users/Poll";
import ProfilePage from "./pages/Users/ProfilePage";
import Unauthorized from "./components/admin/UnAuthorized";
import AdminLayout from "./layout/AdminLayout";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import FeatureInProgress from "./components/admin/FeatureInProgress";
import Players from "./pages/admin/Players";


const App = () => {



  return (
    <Router>
      <Routes>

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProtectRoute> <ProfilePage /></ProtectRoute>} />
        <Route path="/poll" element={<Poll />} />
        <Route path="/" element={<ProtectRoute> <HomePage /></ProtectRoute>} />

        {/* // Admin routes with protection */}
        <Route
          path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="players" element={<Players />} />
          <Route path="coaches" element={<FeatureInProgress />} />
          <Route path="matches" element={<FeatureInProgress />} />
          <Route path="fixtures" element={<FeatureInProgress />} />
          <Route path="tournaments" element={<FeatureInProgress />} />
          <Route path="tickets" element={<FeatureInProgress />} />
          <Route path="news" element={<FeatureInProgress />} />
          <Route path="gallery" element={<FeatureInProgress />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Other routesF */}
        <Route path="*" element={<NotFound />} />


      </Routes>
    </Router>
  )
}

export default App