import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { gamesInstance } from '../../axios'

export const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [publisherDetails, setPublisherDetails] = useState(null)
  const [createdGames, setCreatedGames] = useState(null)

  useEffect(() => {
    gamesInstance
      .get(`/publishers/${id}`)
      .then((response) => setPublisherDetails(response.data))
      .catch((error) => console.error(error))

    gamesInstance
      .get(`/publishers/createdGames/${id}`)
      .then((response) => setCreatedGames(response.data))
      .catch((error) => console.error(error))
  }, [id])

  if (publisherDetails === null || createdGames === null) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div>
        <img
          src={publisherDetails.logoUrl}
          alt={`${publisherDetails.name} logo`}
          width={200}
        />
        <p>Publisher name: {publisherDetails.name}</p>
        <p>Created games:</p>
        <ul>
          {createdGames.map((createdGame) => (
            <li
              key={createdGame._id}
              onClick={() => navigate(`/games/details/${createdGame._id}`)}
            >
              {createdGame.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
