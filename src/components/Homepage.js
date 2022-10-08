import React, {useEffect} from "react";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';

import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/')
      }
    });
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <button onClick={handleSignOut}>sign out</button>
    </div>
  )
}

export default Homepage;