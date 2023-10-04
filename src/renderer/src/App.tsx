import AppLayout from './components/AppLayout'
import './assets/globals.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from "./configs/routes"
import { ConfigProvider, App as Appd, theme } from "antd"
import { Component } from "react"

function App(): JSX.Element {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        components: {
          Collapse: {
            headerPadding: '24px 16px',
            contentPadding: '24px 24px',
          }
        }
      }}
    >
      <Appd>
        <BrowserRouter>
          <AppLayout>
            <Routes>
              {routes.map((route) =>
                <Route path={route.path} element={route.element} key={route.path} />
              )}
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </Appd>
    </ConfigProvider>
  )
}

export default App
