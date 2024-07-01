import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/layout";
import Index from "./pages";
import {
  PATH_BLOG,
  PATH_LOGIN,
  PATH_REAL_ESTATE,
  PATH_REGISTER,
} from "./constants/path";
import RealEstate from "./pages/realEstate";
import Blog from "./pages/blog";
import Login from "./pages/login";
import Register from "./pages/register";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />

        <Route path={PATH_LOGIN} element={<Login />} />
        <Route path={PATH_REGISTER} element={<Register />} />
        <Route path={PATH_REAL_ESTATE} element={<RealEstate />} />
        <Route path={PATH_BLOG} element={<Blog />} />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Router;
