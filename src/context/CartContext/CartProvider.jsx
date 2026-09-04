import { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
  addProductToCart,
  clearCart,
  getCartItems,
  removeItemFromCart,
  updateCartItemCount,
} from "../../services/cart.service";
import { TokenContext } from "./../TokenContext/TokenContext";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useContext(TokenContext);

  const fetchProductsFromCart = useCallback(() => {
    getCartItems()
      .then((response) => {
        if (response.success) {
          setIsError(false);
          setCartInfo(response.data);
        }
      })
      .catch((err) => {
        setIsError(true);
        setError(err);
        setCartInfo({
          numOfCartItems: 0,
          data: { products: [], totalCartPrice: 0 },
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function refetchCart() {
    setIsLoading(true);
    setIsError(false);
    fetchProductsFromCart();
  }

  async function addingProductToCart(id) {
    try {
      setIsLoading(true);
      const response = await addProductToCart({ id });
      if (response.success) {
        toast.success(response.data.message);
        setCartInfo(response.data);
        setIsLoading(false);
        await fetchProductsFromCart();
      }
    } catch (error) {
      toast.error(error.message);
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRemoveItemFromCart({ id }) {
    try {
      const alert = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: " #d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (alert.isConfirmed) {
        const toastLoader = toast.loading("Removing item from cart!");

        const response = await removeItemFromCart({ id });

        if (response.success) {
          toast.dismiss(toastLoader);
          setIsLoading(false);
          setCartInfo(response.data);
        }
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpdateCount({ id, count }) {
    try {
      const response = await updateCartItemCount({ id, count });

      if (response.success) {
        setIsLoading(false);
        setCartInfo(response.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleClearCart() {
    try {
      const alert = await Swal.fire({
        title: "Are you sure to clear cart?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: " #d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (alert.isConfirmed) {
        const response = await clearCart();

        if (response.success) {
          setIsLoading(false);
          setCartInfo({
            data: { products: [], totalCartPrice: 0 },
            numOfCartItems: 0,
          });
        }
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchProductsFromCart();
    }
  }, [isAuthenticated, fetchProductsFromCart]);

  return (
    <CartContext.Provider
      value={{
        cartInfo,
        setCartInfo,
        isLoading,
        isError,
        error,
        refetchCart,
        addingProductToCart,
        handleRemoveItemFromCart,
        handleUpdateCount,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
