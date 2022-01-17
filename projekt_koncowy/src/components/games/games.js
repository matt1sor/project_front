import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { gamesInstance } from '../../axios'

export const Games = () => {
  const navigate = useNavigate()
  const [games, setGames] = useState(null)

  useEffect(() => {
    gamesInstance
      .get('/games')
      .then((response) => setGames(response.data))
      .catch((error) => console.error(error))
  }, [])

  if (games === null) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {games.map((game) => (
        <li key={game._id} onClick={() => navigate(`details/${game._id}`)}>
          {game.title}
        </li>
      ))}
    </ul>
  )
}
