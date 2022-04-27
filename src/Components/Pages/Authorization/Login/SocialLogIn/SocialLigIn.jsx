import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../../Firebase/Firebase.init";

const SocialLigIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
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
