import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage, ErrorPage } from "./pages";
import { MainLayout } from "./pages/layout";

const router = createBrowserRouter([
  {
    // 경로: '/'
    path: `/`,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    // 세부 경로들은 children에 적으면 됩니다.
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
