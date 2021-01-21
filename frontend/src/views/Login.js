import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
// import { Container } from './styles';

function Login({ history }) {
  const [username, setUsename] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("🚀 ~ file: Login.js ~ line 8 ~ Login ~ username", username);
    history.push('/main');

  }

  return (
      <div className="login-container">
        <form onSubmit={handleSubmit}>
            <img src={logo} alt="Tindev"/> 
            <input 
                type="text"
                placeholder="Digite seu usuário no github"
                value={username}
                onChange={ e => setUsename(e.target.value)}
            />    
            <button type="submit">Enviar</button>
        </form>    
     </div>
  );
}

export default Login;
