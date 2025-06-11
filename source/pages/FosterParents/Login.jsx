import React, {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('foster@furryfutures.org');
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
      <main className="login-page-container">

        <section className="login-page-left">
          <h1 className='hero-h1'>Welcome back</h1>
          <h3>Sign in to view your portal.</h3>
        </section>

        <section className="login-page-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <label>
              Email
              <input
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </label>
            <label>
              Password
              <input
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </label>
            <button className="fancy-button login-button" type="submit">Sign in</button>
          </form>
        </section>
        
      </main>
    );
}
