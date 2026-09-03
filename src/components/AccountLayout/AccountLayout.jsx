import {
  faCreditCard,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faDashboard,
  faLocationDot,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router";

export default function AccountLayout() {
  return (
    <section className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 xl:flex-row">
          <aside className="w-full xl:w-1/4">
            <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
              {/* User Profile Section */}
              <div className="border-b border-gray-100 p-6 py-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-400 ring-primary-200 flex size-10 items-center justify-center rounded-full ring-4">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-primary-700"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{"user"}</h3>
                    <p className="text-sm text-gray-500">
                      {"example@gmail.com"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="p-2">
                <ul className="space-y-1">
                  <li>
                    <NavLink
                      to="/account/dashboard"
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary-50 text-primary-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      <FontAwesomeIcon icon={faDashboard} className="h-5 w-5" />
                      <span>Dashboard</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/account/orders"
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary-50 text-primary-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        className="h-5 w-5"
                      />
                      <span>Orders</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/account/wishlist"
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary-50 text-primary-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      <FontAwesomeIcon icon={faHeart} className="h-5 w-5" />
                      <span>Wishlist</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/account/address"
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary-50 text-primary-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span>Address</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/account/payment-methods"
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary-50 text-primary-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      <FontAwesomeIcon
                        icon={faCreditCard}
                        className="h-5 w-5"
                      />
                      <span>Payment Methods</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/account/account-info"
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary-50 text-primary-700"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
                      <span>Account Info</span>
                    </NavLink>
                  </li>

                  {/* Logout Button */}
                  <li className="mt-2 border-t border-gray-100 pt-2">
                    <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50">
                      <FontAwesomeIcon icon={faSignOut} className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <div className="w-full xl:w-3/4">
            <div className="overflow-hidden rounded-md bg-white p-6 shadow-sm">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
