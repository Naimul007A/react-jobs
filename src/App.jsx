import React from 'react'
import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/404NotFound';
import JobPage from './pages/JobPage';

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} />
    </Route>
    <Route path='*' element={<NotFound />} />
    </>
))
const App = () => {
  return <RouterProvider router={router} />
}

export default App
