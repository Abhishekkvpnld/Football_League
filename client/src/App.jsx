import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";

// Protected Routes
import ProtectRoute from "./components/Users/ProtectRoute";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import PageLoader from "./components/Users/Fallback";

// Lazy Loaded Pages
const Login = lazy(() => import("./pages/Users/LoginPage"));
const SignupPage = lazy(() => import("./pages/Users/SignupPage"));
const ForgotPassword = lazy(() => import("./pages/Users/ForgotPassword"));
const HomePage = lazy(() => import("./pages/Users/HomePage"));
const ProfilePage = lazy(() => import("./pages/Users/ProfilePage"));
const Poll = lazy(() => import("./pages/Users/Poll"));
const GalleryPage = lazy(() => import("./pages/Users/Gallary"));
const NotFound = lazy(() => import("./pages/Users/NoteFound"));

const Unauthorized = lazy(() =>
  import("./components/admin/UnAuthorized")
);

const AdminLayout = lazy(() =>
  import("./layout/AdminLayout")
);

const Dashboard = lazy(() =>
  import("./pages/admin/Dashboard")
);

const Players = lazy(() =>
  import("./pages/admin/Players")
);

const FixturesPage = lazy(() =>
  import("./pages/admin/Fixture")
);

const FeatureInProgress = lazy(() =>
  import("./components/admin/FeatureInProgress")
);

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <PageLoader />
        }
      >
        <Routes>
          {/* ---------- Public Routes ---------- */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          {/* ---------- Protected User Routes ---------- */}

          <Route element={<ProtectRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/poll" element={<Poll />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Route>
          {/* ---------- Admin Routes ---------- */}

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
            <Route path="fixtures" element={<FixturesPage />} />
            <Route path="tournaments" element={<FeatureInProgress />} />
            <Route path="tickets" element={<FeatureInProgress />} />
            <Route path="news" element={<FeatureInProgress />} />
            <Route path="gallery" element={<GalleryPage />} />
          </Route>

          {/* ---------- Other Routes ---------- */}

          <Route
            path="/unauthorized"
            element={<Unauthorized />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#fff",
            color: "#1e293b",
          },
        }}
      />
    </Router>
  );
}