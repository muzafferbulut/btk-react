import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";
import HomePage from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLayout";
import ContactPage from "./pages/help/ContactPage";
import FaqPage from "./pages/help/FaqPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage /> },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { index: true, element: <ContactPage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FaqPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
