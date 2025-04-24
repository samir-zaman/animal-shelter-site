import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from "../../components/Firebase"

export default function Login() {
  const [email, setEmail] = useState("demo@furryfutures.org");
  const [password, setPassword] = useState("password123");

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('signed in user', user);
      })
      .catch((error) => {
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        console.error('Full error:', error);
      });
  }

  return (
    <form onSubmit={handleSignIn}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}