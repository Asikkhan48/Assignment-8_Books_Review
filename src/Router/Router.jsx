import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import ListedBooks from '../Pages/ListedBooks';
import PagesRead from '../Pages/PagesRead';
import Book from '../Pages/Book';
import Bookmark from '../Pages/Bookmark';



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
          element: <ListedBooks></ListedBooks>,
          loader: () => fetch("books.json")
        },
        {
          path: "/book/:id",
          element: <Book></Book>,
          loader: ({params}) => fetch(`books.json/${params.id}`),
        },
        {
          path: "/read",
          element: <PagesRead></PagesRead>
        },
        {
          path: "/bookmark",
          element: <Bookmark></Bookmark>
        }
      ]
    },
  ]);
  
export default router;