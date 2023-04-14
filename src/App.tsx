import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { useCookies } from 'react-cookie';

const apiUrl = import.meta.env.VITE_API_URL

interface DiscordUser {
  username: string;
  id: string;
  avatar: string;
}

function App() {
  const [user, setUser] = useState<DiscordUser | null>(null);
  const [cookies, _, removeCookie] = useCookies(['discord_access_token']);

  useEffect(() => {
    if (cookies.discord_access_token) {
      axios.get(apiUrl + '/api/auth/user', {
        headers: {
          Authorization: `Bearer ${cookies.discord_access_token}`
        }
      }).then(response => {
        const user = response.data;
        setUser(user);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [])

  function handleLogout() {
    removeCookie('discord_access_token')
    setUser(null)
  }

  return (
    <div>
      {user !== null ?
        (
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <span>
                {user.username}
              </span>
              <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`} 
                alt={`${user.username} profile picture`} 
                style={{ borderRadius: 50, width: 50, height: 50 }} />
            </div>
            <button onClick={handleLogout}>logout</button>
          </div>
        )
        :
        (<a href={`${apiUrl}/api/auth/discord`}>Login with Discord</a>)
      }
    </div>
  )
}

export default App
