import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useNavigate } from "react-router-dom";
import './welcome.css';

const Welcome = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  // to keep the user authenticated
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/homepage");
      }
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  }

  const handleRegister = () => {
    if(registerInformation.email !== registerInformation.confirmEmail) {
      alert("Please confirm that emails are the same")
      return
    } else if (registerInformation.password !== registerInformation.confirmPassword) {
      alert("Please confirm that passwords are the same")
      return
    }
    createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password)
      .then(() => {
        navigate("/homepage");
      })
      .catch(err => alert(err.message));
  }

  return (
    <div className="welcome">
      <h1>Todo-List</h1>
      <div className="login-register-container">
        {
          isRegistering ? (
            <>
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={registerInformation.email}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      email: e.target.value
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="Confirm Email"
                  value={registerInformation.confirmEmail}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      confirmEmail: e.target.value
                    })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={registerInformation.password}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      password: e.target.value
                    })
                  }
                />
                <input
                  type="Confirm Password"
                  value={registerInformation.confirmPassword}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      confirmPassword: e.target.value
                    })
                  }
                />
                <button onClick={handleRegister}>Register</button>
                <button onClick={() => setIsRegistering(false)}>Go back</button>
              </>
            </>
          ) : (
              <>
                <input type="email" onChange={handleEmailChange} value={email} />
                <input type="password" onChange={handlePasswordChange} value={password}  />
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={() => setIsRegistering(true)}>Create an account</button>
              </>
            )
        }
      </div>
    </div>
  )
}

export default Welcome;