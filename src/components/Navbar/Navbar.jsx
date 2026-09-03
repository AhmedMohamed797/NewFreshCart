import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import freshCartLogo from "../../assets/imgs/freshcart-logo.svg";
import { TokenContext } from "../../context/TokenContext/TokenContext";
import { CartContext } from "./../../context/CartContext/CartContext";
import { useOnlineStatus } from "./../../hooks/useOnlineStatus";

export default function Navbar() {
  const { isAuthenticated, logOut } = useContext(TokenContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartInfo, isLoading } = useContext(CartContext);
  const isOnline = useOnlineStatus();

  function changeMenu() {
    return setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        {/* Top Navbar */}
        <div className="top-nav container hidden items-center justify-between border-b border-gray-100 py-2 text-sm lg:flex">
          <ul className="contacts flex items-center gap-5">
            <li className="flex items-center gap-1">
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
            </li>
            <li className="flex items-center gap-1">
              <FontAwesomeIcon icon="fa-regular fa-envelope" />
              <a href="mailto:support@freshcart.com">support@freshcart.com</a>
            </li>

            {isOnline && (
              <p className="text-primary-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faWifi} />
                <span>Online</span>
              </p>
            )}
          </ul>

          <ul className="options flex items-center gap-5">
            <li>
              <Link to={"/track-order"}>Track Order</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Contacts</Link>
            </li>
            <li>
              <select className="cursor-pointer">
                <option value="egp">EGP</option>
                <option value="usd">USD</option>
                <option value="sar">SAR</option>
              </select>
            </li>
            <li>
              <select className="cursor-pointer">
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </li>
          </ul>
        </div>

        {/* Main Navbar */}
        <nav className="container flex items-center justify-between py-7">
          <Link to={"/"}>
            <img src={freshCartLogo} alt="Fresh Cart Logo" />
          </Link>

          <search className="relative hidden lg:block">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for products..."
              className="input-control min-w-72"
            />
            <span className="absolute top-1/2 right-0 -translate-1/2">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
          </search>

          <ul className="hidden items-center gap-6 lg:flex">
            <li>
              <NavLink
                to={"/account/wishlist"}
                className={({ isActive }) => {
                  return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                }}
              >
                <FontAwesomeIcon
                  className="text-lg"
                  icon="fa-regular fa-heart"
                />
                <span className="text-sm">Wishlist</span>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to={"/cart"}
                className={({ isActive }) => {
                  return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                }}
              >
                <FontAwesomeIcon
                  className="text-lg"
                  icon="fa-solid fa-cart-shopping"
                />
                <span className="text-sm">Cart</span>
                <span className="bg-primary-500 absolute top-0 right-0 flex size-5 -translate-y-1/2 items-center justify-center rounded-full text-white">
                  {isLoading && isAuthenticated ? (
                    <FontAwesomeIcon icon="fa-solid fa-spinner" spin />
                  ) : (
                    cartInfo?.numOfCartItems || 0
                  )}
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/account"}
                className={({ isActive }) => {
                  return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                }}
              >
                <FontAwesomeIcon
                  className="text-lg"
                  icon="fa-regular fa-user"
                />
                <span className="text-sm">Account</span>
              </NavLink>
            </li>

            {!isAuthenticated ? (
              <>
                {" "}
                <li>
                  <NavLink
                    to={"/signup"}
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      icon="fa-solid fa-user-plus"
                    />
                    <span className="text-sm">Signup</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      icon="fa-regular fa-id-card"
                    />
                    <span className="text-sm">Login</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <li
                onClick={logOut}
                className={
                  "hover:text-primary-600 flex cursor-pointer flex-col items-center gap-1 transition-colors duration-200"
                }
              >
                <FontAwesomeIcon
                  className="text-lg"
                  icon="fa-solid fa-right-from-bracket"
                />
                <span className="text-sm">Logout</span>
              </li>
            )}
          </ul>

          <div
            onClick={changeMenu}
            className="btn cursor-pointer px-2 py-1 text-lg lg:hidden"
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            )}
          </div>
        </nav>

        {/* Bottom Navbar */}
        <div className="hidden bg-gray-100/60 py-3 text-[15px] lg:block">
          <div className="container flex items-center gap-8">
            <div className="group relative">
              <button className="btn bg-primary-600 flex items-center gap-2 text-sm text-white">
                <FontAwesomeIcon icon="fa-solid fa-bars" />
                <span>All Categories</span>
                <FontAwesomeIcon icon="fa-solid fa-angle-down" />
              </button>

              <div className="absolute top-9 hidden min-w-52 rounded bg-white text-gray-900 shadow group-hover:block">
                <ul className="*:hover:text-primary-600 divide-y divide-gray-100 transition-colors duration-200 *:px-2 *:py-2 *:hover:bg-gray-100/60">
                  <li>
                    <Link
                      className="flex items-center gap-2"
                      to={"/men-fashion"}
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon="fa-solid fa-person"
                      />
                      <span>Men's Fashion</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2"
                      to={"/women-fashion"}
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon="fa-solid fa-person"
                      />
                      <span>Women's Fashion</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center gap-2" to={"/baby-toy"}>
                      <FontAwesomeIcon
                        className="text-xl"
                        icon="fa-solid fa-baby"
                      />
                      <span>Baby & Toys</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2"
                      to={"/beauty-health"}
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon="fa-solid fa-kit-medical"
                      />
                      <span>Beauty & Health</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2"
                      to={"/electronics"}
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon="fa-solid fa-bolt"
                      />
                      <span>Electronics</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2"
                      to={"/categories"}
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon="fa-solid fa-ellipsis"
                      />
                      <span>View All Categories</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="pages flex items-center gap-4 text-[15px]">
              <li>
                <NavLink
                  to={"/home"}
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/recently-added"}
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                  }}
                >
                  Recently Added
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/products"}
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                  }}
                >
                  Featured Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/offers"}
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                  }}
                >
                  Offers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/brands"}
                  className={({ isActive }) => {
                    return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex flex-col items-center gap-1 transition-colors duration-200`;
                  }}
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Offcanvas */}
      {isMenuOpen && (
        <>
          <div
            onClick={changeMenu}
            className="background fixed inset-0 z-30 h-screen w-full bg-black/40"
          ></div>
          <div className="offcanvas animate-slide-in-left fixed top-0 bottom-0 z-40 min-w-64 bg-white p-3">
            <div className="flex items-center justify-between border-b border-gray-100 py-2">
              <Link to={"/"}>
                <img
                  src={freshCartLogo}
                  className="w-36"
                  alt="Fresh Cart Logo"
                />
              </Link>

              <button
                onClick={changeMenu}
                className="btn size-9 rounded-full p-0"
              >
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
              </button>
            </div>

            <search className="relative mt-6">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for products..."
                className="input-control"
              />
              <span className="absolute top-1/2 right-0 -translate-1/2">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </span>
            </search>

            <div className="border-b border-gray-200 py-5">
              <h2 className="mb-3 text-xl font-bold">Main Menu</h2>

              <ul className="flex flex-col gap-6">
                <li>
                  <NavLink
                    to={"/account/wishlist"}
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex items-center gap-1 transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      icon="fa-regular fa-heart"
                    />
                    <span>Wishlist</span>
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to={"/cart"}
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex items-center gap-1 transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      icon="fa-solid fa-cart-shopping"
                    />
                    <span>Cart</span>
                    <span className="bg-primary-500 absolute top-0 left-0 flex size-5 -translate-y-1/2 items-center justify-center rounded-full text-white">
                      {isLoading && isAuthenticated ? (
                        <FontAwesomeIcon icon="fa-solid fa-spinner" spin />
                      ) : (
                        cartInfo?.numOfCartItems || 0
                      )}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/account"}
                    className={({ isActive }) => {
                      return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex items-center gap-1 transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      icon="fa-regular fa-user"
                    />
                    <span>Account</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="py-5">
              <h2 className="mb-3 text-xl font-bold">Account</h2>

              <ul className="flex flex-col gap-6">
                {!isAuthenticated ? (
                  <>
                    {" "}
                    <li>
                      <NavLink
                        to={"/signup"}
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex items-center gap-1 transition-colors duration-200`;
                        }}
                      >
                        <FontAwesomeIcon
                          className="text-lg"
                          icon="fa-solid fa-user-plus"
                        />
                        <span>Signup</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) => {
                          return `${isActive ? "text-primary-600" : ""} hover:text-primary-600 flex items-center gap-1 transition-colors duration-200`;
                        }}
                      >
                        <FontAwesomeIcon
                          className="text-lg"
                          icon="fa-regular fa-id-card"
                        />
                        <span>Login</span>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li
                    onClick={logOut}
                    className={
                      "hover:text-primary-600 flex cursor-pointer items-center gap-1 transition-colors duration-200"
                    }
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      icon="fa-solid fa-right-from-bracket"
                    />
                    <span>Logout</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
