import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // note that moving this code outside of useEffect will cause a warning
  // "Cannot update a component ('BrowserRouter') while rendering a different component ('ProtectedRoute')
  useEffect(() => {
    if (loading) return; //todo: add loading screen
    if (!user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  return <Outlet />;
}
