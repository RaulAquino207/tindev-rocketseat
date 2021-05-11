import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import api from '../services/api'

// import { Container } from './styles';

function Main({ match }) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers(){
      const response = await api.get('/devs', {
        headers: { user: match.params.id, }
      })
      const { users } = response.data 
      console.log(users)
      setUsers(users)
    }

    loadUsers();
  }, [match.params.id])

  async function handleLike(id){
    console.log('like', id)
    await api.post(`devs/${id}/likes`, null, {
      headers: { user: match.params.id, }
    })

    setUsers(users.filter(user => user._id  !== id));
  }

  async function handleDislike(id){
    console.log('dislike', id)
    await api.post(`devs/${id}/dislikes`, null, {
      headers: { user: match.params.id, }
    })

    setUsers(users.filter(user => user._id  !== id));

  }

  return <div className="main-container">
    {/* <h1>{match.params.id}</h1> */}
    <Link to="/">
      <img src={logo} alt="Tindev"></img>
    </Link>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (<li key={user._id}>
        <img src={user.avatar} alt={user.name}></img>
        <footer>
          <strong>
            {user.name}
          </strong>
          <p>
            {user.bio}
          </p>
        </footer>

        <div className="buttons">
          <button type="button" onClick={() => handleDislike(user._id)}>
            <img src={dislike} alt="dislike"></img>
          </button>
          <button type="button" onClick={() => handleLike(user._id)}>
            <img src={like} alt="like"></img>
          </button>
        </div>
      </li>))}
        </ul>
      ) : (
        <div className="empty">Acabou :(</div>
      ) }

  </div>
}

export default Main;