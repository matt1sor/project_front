import { GamesRoutes } from './components/games/routes'
import { PublishersRoutes } from './components/publisher/routes'

export const MainRoutes = () => {
  return (
    <>
      <GamesRoutes />
      <PublishersRoutes />
    </>
  )
}
