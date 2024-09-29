import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainScreen from "./views/MainScreen";
import About from "./components/About";
import Projects from "./components/Projects";
import Talks from "./components/Talks";
import Blogs from "./components/Blogs";
import Hobbies from "./components/Hobbies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "talks",
        element: <Talks />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "hobbies",
        element: <Hobbies />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;