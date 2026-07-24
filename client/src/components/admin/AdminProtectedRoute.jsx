import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import toast from "react-hot-toast";

export default function AdminProtectedRoute({ children }) {
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        toast.error("Please login to continue.");
      } else if (user.role !== "admin") {
        toast.error("You are not authorized to access this page.");
      }
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
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

  return children ? children : <Outlet />;
}