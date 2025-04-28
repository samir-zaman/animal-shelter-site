import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('foster@furryfutures.org')
    const [password, setPassword] = useState('password');
    const [authenticated, setAuthenticated] = useState(
      localStorage.getItem('authenticated') === 'true'
    );
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email === 'foster@furryfutures.org' && password === 'password') {
        setAuthenticated(true);
        localStorage.setItem('authenticated', 'true');
      } else {
        alert('Incorrect password');
      }
    };
    
    return authenticated ? (
      <Outlet />) :
    (
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter password"
        />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit">Access Site</button>
      </form>
      <p>foster@furryfutures.org</p>
    );
}
