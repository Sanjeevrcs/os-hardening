import AppLayout from './components/AppLayout'
import './assets/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './configs/routes'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
