import { Route, Routes } from 'react-router-dom'
import { Details } from './detailsPublisher'

export const PublishersRoutes = () => {
  return (
    <Routes>
      <Route path={'publishers'}>
        <Route path={'details/:id'} element={<Details />} />
      </Route>
    </Routes>
  )
}
