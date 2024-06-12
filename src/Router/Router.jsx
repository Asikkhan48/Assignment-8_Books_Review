import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import ListedBooks from '../Pages/ListedBooks';
import PagesRead from '../Pages/PagesRead';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/books",
          element: <ListedBooks></ListedBooks>
        },
        {
          path: "/read",
          element: <PagesRead></PagesRead>
        }
      ]
    },
  ]);
  
export default router;