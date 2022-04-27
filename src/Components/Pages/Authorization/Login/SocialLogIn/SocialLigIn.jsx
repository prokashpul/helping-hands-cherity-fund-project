import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../../Firebase/Firebase.init";

const SocialLigIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <p>Loading......</p>;
  }
  if (error) {
    alert(error.message);
  }
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>Google Login</button>
    </div>
  );
};

export default SocialLigIn;
