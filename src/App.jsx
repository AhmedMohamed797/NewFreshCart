import "@fontsource/poppins";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas, far, fab);

import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Bounce, ToastContainer } from "react-toastify";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CategoriesProvider from "./context/CategoriesContext/CategoriesProvider";
import ProductsProvider from "./context/ProductsContext/ProductsProvider";
import Brands from "./pages/Brands/Brands";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Orders from "./pages/Orders/Orders";
import Signup from "./pages/Signup/Signup";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to={"/home"} />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "brands",
          element: <Brands />,
        },
        {
          path: "products/:id",
          element: <ProductDetails />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <ProductsProvider>
        <CategoriesProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </CategoriesProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
