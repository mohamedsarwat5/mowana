import React, { Children } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Rooms from './components/Rooms/Rooms'
import Book from './components/Book/Book'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Suites from './components/Suites/Suites'
import Layout from './components/Layout/Layout'

export default function App() {

  let router = createBrowserRouter(
    [{
      path: '', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: 'rooms', element: <Rooms></Rooms> },
        { path: 'book', element: <Book></Book> },
        { path: 'services', element: <Services></Services> },
        { path: 'contact', element: <Contact></Contact> },
        { path: 'suites', element: <Suites></Suites> },
      ]
}])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
