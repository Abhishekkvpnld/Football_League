import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Update the path

export default function AdminProtectedRoute({ children }) {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  // User is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but not an admin
  if (user?.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  // Admin access
  return children ? children : <Outlet />;
}