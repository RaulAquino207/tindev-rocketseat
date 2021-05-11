import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
import api from '../services/api'
// import { Container } from './styles';

function Login({ history }) {
  const [username, setUsename] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    
    const reponse = await api.post('/devs', {
      username,
    });

    console.log("🚀 ~ file: Login.js ~ line 13 ~ Login ~ username", reponse);
    const { _id } = reponse.data;

    history.push(`/dev/${_id}`);

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
