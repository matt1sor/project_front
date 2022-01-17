import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { gamesInstance } from '../../axios'

export const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [gameDetails, setGameDetails] = useState(null)

  useEffect(() => {
    gamesInstance
      .get(`/games/${id}`)
      .then((response) => setGameDetails(response.data))
      .catch((error) => console.error(error))
  }, [id])

  if (gameDetails === null) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div>
        <p>Game title: {gameDetails.title}</p>
        <p>Game rating: {gameDetails.rating}</p>
        {gameDetails.publisher && (
          <p
            onClick={() =>
              navigate(`/publishers/details/${gameDetails.publisher._id}`)
            }
          >
            Publisher: {gameDetails.publisher.name}
          </p>
        )}
      </div>
    </div>
  )
}
