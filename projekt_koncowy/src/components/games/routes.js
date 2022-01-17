import { Route, Routes } from 'react-router-dom'
import { Games } from './games'
import { Details } from './details'

export const GamesRoutes = () => {
  return (
    <Routes>
      <Route path={'games'}>
        <Route path={''} element={<Games />} />
        <Route path={'details/:id'} element={<Details />} />
      </Route>
    </Routes>
  )
}
