import React, {useEffect, useState} from "react";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';

import "./homepage.css";

const Homepage = () => {
  const [todo, setTodo] = useState("");
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
      <input
        type="text"
        placeholder="Add todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>add</button>
      <button onClick={handleSignOut}>sign out</button>
    </div>
  )
}

export default Homepage;