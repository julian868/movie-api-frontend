import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Upcoming from "./components/Upcoming";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import NowPlaying from "./components/NowPlaying";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import Favs from "./components/Favs";
import Genre from "./components/Genre";
import Login from "./components/Login";
import Popular from "./components/Popular";
import Signup from "./components/Signup";
import Trending from "./components/Trending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
      {
        path: "/favs",
        element: <Favs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    // Add errorElement for the root route
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
