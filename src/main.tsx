import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./style.css"
import Home from "./pages/Home"
import AlbumStorage from "./context/AlbumContext"
import Query from "./pages/Query"
import Discovery from "./pages/Discovery"
import Favorites from "./pages/Favorites"
import Profile from "./pages/Profile"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        element: <Favorites />,
        path: "/favoritos"
      },
      {
        element: <Discovery />,
        path: "/descobrir"
      },
      {
        element: <Query />,
        path: "/pesquisa"
      },
      {
        element: <Profile />,
        path: "/perfil"
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AlbumStorage>
      <RouterProvider router={router} />
    </AlbumStorage>
  </React.StrictMode>
)
