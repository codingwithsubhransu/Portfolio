import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout"
import About from "./Components/Hero/About"
import Projects from "./Components/Hero/Projects"
import Skills from "./Components/Hero/Skills"
import Contact from "./Components/Hero/Contact"
import Experience from "./Components/Hero/Experience"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
