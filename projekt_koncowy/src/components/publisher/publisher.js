import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { gamesInstance } from '../../axios'

export const Publisher = () => {
  const navigate = useNavigate()
  const [publishers, setPublishers] = useState(null)

  useEffect(() => {
    gamesInstance
      .get('/games')
      .then((response) => setPublishers(response.data))
      .catch((error) => console.error(error))
  }, [])

  if (publishers === null) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {publishers.map((publisher) => (
        <li
          key={publisher._id}
          onClick={() => navigate(`publishersDetails/${publisher._id}`)}
        >
          {publisher.title}
        </li>
      ))}
    </ul>
  )
}
