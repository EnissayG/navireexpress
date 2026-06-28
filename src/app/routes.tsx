import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export const router = createBrowserRouter(
[
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "testimonials", Component: Testimonials },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
],
{ basename: basename || undefined },
);
