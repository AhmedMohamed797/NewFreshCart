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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./context/CartContext/CartProvider";
import CategoriesProvider from "./context/CategoriesContext/CategoriesProvider";
import ProductsProvider from "./context/ProductsContext/ProductsProvider";
import TokenProvider from "./context/TokenContext/TokenProvider";
import Brands from "./pages/Brands/Brands";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Checkout from "./pages/Checkout/Checkout";
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
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
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
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          ),
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
      <TokenProvider>
        <CartProvider>
          <ProductsProvider>
            <CategoriesProvider>
              <RouterProvider router={router} />
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                pauseOnHover={false}
                rtl={false}
                theme="colored"
                closeButton={false}
                transition={Bounce}
              />
            </CategoriesProvider>
          </ProductsProvider>
        </CartProvider>
      </TokenProvider>
    </>
  );
}

export default App;
