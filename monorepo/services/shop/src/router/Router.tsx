import { Shop } from "./../pages/Shop";
import { Suspense } from "react";
import { App } from "./../components/App/App";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Loading..."}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/second",
        element: (
          <Suspense fallback={"Loading..."}>
            <div style={{ color: "red" }}>
              <h1>second page</h1>
            </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
