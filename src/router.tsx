import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/layout";
import Index from "./pages";
import { PATH_BLOG, PATH_REAL_ESTATE } from "./constants/path";
import RealEstate from "./pages/realEstate";
import Blog from "./pages/blog";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path={PATH_REAL_ESTATE} element={<RealEstate />} />
        <Route path={PATH_BLOG} element={<Blog />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Router;
