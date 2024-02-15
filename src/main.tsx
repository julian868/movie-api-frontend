import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Upcoming from "./pages/Upcoming";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
        errorElement: <NotFound />,
      },
      {
        path: "/popular",
        element: <Popular />,
        errorElement: <NotFound />,
      },
      {
        path: "/now-playing",
        element: <NowPlaying />,
        errorElement: <NotFound />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
        errorElement: <NotFound />,
      },
      {
        path: "/genre",
        element: <Genre />,
        errorElement: <NotFound />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
        errorElement: <NotFound />,
      },
      {
        path: "/favs",
        element: <Favs />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
