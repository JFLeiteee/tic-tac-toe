import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/Context.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Choice from './components/Choice.jsx'
import Game from './components/Game.jsx'
import InitialPage from './components/InitialPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <InitialPage />
      },
      {
        path: "asDaLAla51man13hsi1ASD%dsdahs!",
        element: <Choice />
      },
      {
        path: "nkNJ!joas%JasM0012NJasdjoacl",
        element: <Game />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
