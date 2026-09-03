import {
  faClock,
  faCreditCard,
  faEye,
  faTruck,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faRotate,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllOrder } from "../../services/order.service";
import OrdersSkeleton from "./../../components/Skeleton/OrdersSkeleton";
import { TokenContext } from "./../../context/TokenContext/TokenContext";

export default function Orders() {
  const { userInfo } = useContext(TokenContext);

  const [orders, setOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setIsLoading(true);
        const response = await getAllOrder({ userId: userInfo.id });

        if (response.success) {
          setIsLoading(false);
          setOrders(response.data);
        }
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrders();
  }, [userInfo.id]);

  if (isLoading) return <OrdersSkeleton />;

  return (
    <>
      <section>
        <h2 className="mb-3 text-xl font-bold">My Orders</h2>
        {/* Order is empty */}
        {orders.length === 0 && (
          <div className="flex flex-col items-center gap-4 p-8">
            <FontAwesomeIcon
              icon={faTruck}
              className="text-6xl text-gray-400"
            />
            <p>No orders found</p>
            <p>You haven't placed any orders yet.</p>
            <Link to={"/"} className="btn bg-primary-600 text-white">
              Start Shopping
            </Link>
          </div>
        )}

        {/* Order Card */}
        {orders.map((order) => {
          return (
            <div className="overflow-x-auto">
              <div className="mb-3 min-w-200">
                {/* Order Header */}
                <div className="flex items-center justify-between rounded-md border border-gray-300 bg-gray-100/70 p-4">
                  {/* header-title */}
                  <div className="flex gap-5">
                    <div>
                      <p>Order #{order.id}</p>
                      <p className="text-sm text-gray-600">Placed on</p>
                    </div>
                    <div className="flex items-start gap-4 text-[12px] *:p-0.5">
                      {order.isPaid ? (
                        <span className="bg-primary-100 text-primary-600 rounded-md">
                          <FontAwesomeIcon icon={faCheck} />
                          Paid
                        </span>
                      ) : (
                        <span className="rounded-md bg-red-100 text-red-600">
                          <FontAwesomeIcon icon={faClock} />
                          Unpaid
                        </span>
                      )}
                    </div>
                  </div>

                  {/* header btns */}
                  <div>
                    <ul className="flex items-center gap-4 text-sm *:flex *:items-center *:gap-1">
                      <button className="text-primary-600">
                        <FontAwesomeIcon icon={faRotate} />
                        <span>Reorder</span>
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faEye} />
                        <span>View Details</span>
                      </button>
                    </ul>
                  </div>
                </div>

                {/* Order Card Item */}
                <div className="flex min-w-200 items-center justify-between rounded-md border border-gray-300 p-4">
                  {/* Order img */}
                  <div className="flex items-center gap-4">
                    {order.cartItems.slice(0, 2).map((item) => {
                      return (
                        <div key={item.product.id} className="relative">
                          <img
                            src={item.product.imageCover}
                            alt=""
                            className="size-17 object-contain"
                          />
                          <span className="absolute top-0 right-0 flex size-5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-black text-white">
                            {item.count}
                          </span>
                        </div>
                      );
                    })}

                    <div className="flex flex-col border-l border-gray-500 ps-5">
                      <span className="text-gray-500">items</span>
                      <span className="">{order.cartItems.length} items</span>
                    </div>
                  </div>

                  {/* Order Amount */}
                  <div className="flex flex-col">
                    <span className="text-gray-500">Total Amount</span>
                    <span>{order.totalOrderPrice} EGP</span>
                  </div>

                  {/* Order Direction */}
                  <div className="flex flex-col border-r border-gray-300 pe-4">
                    <span className="text-gray-500">Delivered To</span>
                    <span>{order.shippingAddress.city}</span>
                    <span className="text-primary-600 text-[13px]">
                      on {new Date(order.createdAt).toDateString()}
                    </span>
                  </div>

                  {/* Order Actions */}
                  <div className="flex flex-col items-end gap-2 text-sm *:w-fit *:font-normal">
                    {order.isPaid ? (
                      <>
                        <button className="btn flex items-center gap-1 bg-blue-600 text-white">
                          <FontAwesomeIcon icon={faTruckFast} />
                          <span>Track Order</span>
                        </button>
                        <button className="btn border border-gray-200 bg-white text-gray-600">
                          Cancel Order
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn flex items-center gap-2 bg-orange-500 text-white">
                          <FontAwesomeIcon icon={faCreditCard} />
                          <span>Complete Payment</span>
                        </button>
                        <button className="btn bg-primary-600 text-white">
                          Reorder Item
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
