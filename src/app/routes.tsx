import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/app/layout/RootLayout";
import HomePage from "@/pages/Home";
import MeetRahulPage from "@/pages/MeetRahul";
import WhatIDoPage from "@/pages/WhatIDo";
import ProjectsPage from "@/pages/Projects";
import LetsTalkPage from "@/pages/LetsTalk";
import NotFoundPage from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/meet-rahul", element: <MeetRahulPage /> },
      { path: "/what-i-do", element: <WhatIDoPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/lets-talk", element: <LetsTalkPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
