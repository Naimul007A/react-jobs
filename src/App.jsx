import React from 'react'
import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import NotFound from './pages/404NotFound';
const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobPage />} />
    </Route>
    <Route path='*' element={<NotFound />} />
    </>
))
const App = () => {
  return <RouterProvider router={router} />
}

export default App
