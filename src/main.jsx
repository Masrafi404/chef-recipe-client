import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Contact from './Components/Contact/Contact.jsx';
import SignUp from './Components/User/SignUp/SignUp.jsx';
import Login from './Components/User/Login/Login.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Recipes from './Recipes/Recipes.jsx';
import Recipe from './Recipe/Recipe.jsx';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/logIn',
        element: <Login></Login>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
  {
    path: '/recipes/:id',
    element: <PrivateRoutes><Recipes></Recipes></PrivateRoutes>
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);