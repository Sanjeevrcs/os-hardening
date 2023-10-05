import AppLayout from './components/AppLayout'
import './assets/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './configs/routes'
import { App as Appd } from 'antd'

function App(): JSX.Element {
  return (
    <Appd>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} key={route.path} />
            ))}
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </Appd>
  )
}

export default App
