import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "../../context/UserContext";

export default function ProtectRoute() {
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please login to continue.");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}