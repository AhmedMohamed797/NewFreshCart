import "@fontsource/poppins";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas, far, fab);

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Bounce, ToastContainer } from "react-toastify";
import AccountLayout from "./components/AccountLayout/AccountLayout";
import Layout from "./components/Layout/Layout";
import OfflineBadge from "./components/OfflineBadge/OfflineBadge";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./context/CartContext/CartProvider";
import TokenProvider from "./context/TokenContext/TokenProvider";
import Address from "./pages/Address/Address";
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
          path: "allorders",
          element: <Navigate to={"/account/orders"} />,
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
          path: "account",
          element: (
            <ProtectedRoute>
              <AccountLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <Navigate to={"dashboard"} replace />,
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
              path: "dashboard",
              element: <h1>Dashboard</h1>,
            },
            {
              path: "address",
              element: <Address />,
            },
            {
              path: "payment-methods",
              element: <h1>Payment Method</h1>,
            },
            {
              path: "account-info",
              element: <h1>Account Info</h1>,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OfflineBadge>
          <TokenProvider>
            <CartProvider>
              <RouterProvider router={router} />
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                pauseOnHover={false}
                rtl={false}
                theme="light"
                closeButton={false}
                transition={Bounce}
              />
            </CartProvider>
          </TokenProvider>
        </OfflineBadge>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
