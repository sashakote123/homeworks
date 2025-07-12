import { App } from "./../components/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyAbout } from "./../pages/about/About.lazy";
import { Suspense } from "react";

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin/about",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
