
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills'
import Graphic from './components/Graphic/Graphic'


function App() {
  let routes = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { element: <Home />, index: true },
        { path: "about", element: <About /> },
        { path: "skills", element: <Skills /> },
        { path: "experience", element: <Experience /> },
        {
          path: "work", element: <Work />, children: [
            { path: "", element: <Graphic />, index: true },
            { path: "graphic", element: <Graphic /> },
            { path: "apps", element: <Graphic /> },
            { path: "software", element: <Graphic /> },
          ]
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
