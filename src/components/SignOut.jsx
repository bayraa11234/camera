import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("themeColor");
    localStorage.removeItem("me");
  }, []);
  navigate("/signIn");
  return <>Signout</>;
}
