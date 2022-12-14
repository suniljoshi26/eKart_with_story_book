import { useState, FC } from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { Link } from "react-router-dom";
import { WithCart } from "../../hoc/WithProvider";

import WithUser from "../../Hoc/WithUser";
type NavProps = {
  cartCount: any;
};

const NavBar: FC<NavProps> = ({ cartCount }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow fixed">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 mt-0">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-red-500">
                SHOPPY<span className="text-black">KART</span>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className=" px-4 py-2 sm:bg-red-600 rounded-md  hover:text-blue-600">
                <a href="javascript:void(0)">Login</a>
              </li>
              <Link to="/cart">
                <div className="flex flex-col items-center justify-center">
                  <BsMinecartLoaded className="pb-1 text-4xl text-primary-default hover:text-primary-dark" />
                  <span className="-m-8 text-primary-default hover:text-primary-dark">
                    {cartCount}
                  </span>
                </div>
              </Link>

              {/* <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Contact US</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default WithUser(WithCart(NavBar));
