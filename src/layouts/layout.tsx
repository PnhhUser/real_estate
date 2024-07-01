import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaTwitter,
} from "react-icons/fa";
import { CLR_MAIN, H_24, IMG_ALT } from "../constants/constant";
import {
  HOUSE_1,
  HOUSE_2,
  HOUSE_3,
  HOUSE_4,
  IMG_LOGO,
  IMG_LOGO_WHITE,
} from "../constants/img";
import {
  PATH_BLOG,
  PATH_INDEX,
  PATH_LOGIN,
  PATH_REAL_ESTATE,
  PATH_REGISTER,
} from "../constants/path";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

function Layout() {
  const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [visible, setVisible] = useState<boolean>(true);
  const [isClose, setIsClose] = useState<boolean>(true);

  const pathNameShortCut = location.pathname.split("/").join("");

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > H_24 ? setIsMenuFixed(true) : setIsMenuFixed(false)
    );

    if (
      pathNameShortCut === PATH_LOGIN.split("/").join("") ||
      pathNameShortCut === PATH_REGISTER.split("/").join("")
    ) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [visible, pathNameShortCut]);

  return (
    <div className={!isClose ? `overflow-hidden h-screen` : ""}>
      <div
        className={`w-full h-screen bg-black opacity-40 absolute top-0 left-0 z-10 ${
          !isClose ? "block" : "hidden"
        }`}
        onClick={() => setIsClose(true)}
      ></div>

      <div
        ref={navRef}
        className={`w-full bg-main z-50 duration-1000 md:px-5 ${
          isMenuFixed ? "fixed bg-white shadow animated-nav" : ""
        }`}
      >
        <div className="flex flex-wrap justify-between items-center h-16 lg:h-24 container mx-auto">
          <div className="ps-4 md:ps-0">
            <Link to="/">
              <img src={IMG_LOGO} alt={IMG_ALT} />
            </Link>
          </div>
          <div>
            <nav className="hidden md:flex md:gap-8 md:font-medium">
              <NavLink
                to={PATH_INDEX}
                style={({ isActive }) => (isActive ? { color: CLR_MAIN } : {})}
              >
                Home
              </NavLink>
              <NavLink
                to={PATH_REAL_ESTATE}
                style={({ isActive }) => (isActive ? { color: CLR_MAIN } : {})}
              >
                Real Estate
              </NavLink>
              <NavLink
                to={PATH_BLOG}
                style={({ isActive }) => (isActive ? { color: CLR_MAIN } : {})}
              >
                Blog
              </NavLink>
            </nav>
          </div>
          <div className="hidden md:block">
            {visible ? (
              <Link
                to={PATH_LOGIN}
                className="uppercase flex items-center flex-wrap py-4 px-6 main-gradient rounded text-white"
              >
                <span>Login</span>
                <FaLongArrowAltRight className="ml-3" />
              </Link>
            ) : null}
          </div>
          <div className="md:hidden pe-4">
            <AiOutlineMenu
              className="text-3xl"
              onClick={() => setIsClose(false)}
            />
          </div>
        </div>
      </div>
      <Outlet />
      <div className="w-full bg-[#111]">
        <div className="container mx-auto pt-16 pb-20 px-6">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-3 col-span-12">
              <div className="mb-6">
                <img src={IMG_LOGO_WHITE} alt={IMG_ALT} />
              </div>
              <p className="max-w-[220px] text-white">
                It is a long established fact that a reader will be distracted
              </p>
              <div className="flex gap-3 border-[1px] border-slate-400 p-2 max-w-[40%] rounded mt-5 text-white">
                <FaFacebookF className="flex-1" />
                <FaTwitter className="flex-1" />
                <FaLinkedinIn className="flex-1" />
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12">
              <h5 className="lg:mb-6 mb-4 text-xl text-white font-medium mt-4 lg:mt-0">
                Useful Links
              </h5>
              <ul>
                <li className="text-white mb-4">
                  <Link
                    to={PATH_INDEX}
                    className="hover:text-clr-main transition-colors duration-300"
                  >
                    <MdKeyboardDoubleArrowRight className="inline-block mr-2 text-clr-main" />
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-12">
              <h5 className="mb-6  text-xl text-white font-medium">Services</h5>
              <ul>
                <li className="text-white mb-4">
                  <Link
                    to={PATH_INDEX}
                    className="hover:text-clr-main transition-colors duration-300"
                  >
                    <MdKeyboardDoubleArrowRight className="inline-block mr-2 text-clr-main" />
                    Reliable Rentals
                  </Link>
                </li>
                <li className="text-white mb-4">
                  <Link
                    to={PATH_INDEX}
                    className="hover:text-clr-main transition-colors duration-300"
                  >
                    <MdKeyboardDoubleArrowRight className="inline-block mr-2 text-clr-main" />
                    Golden Key Properties
                  </Link>
                </li>
                <li className="text-white mb-4">
                  <Link
                    to={PATH_INDEX}
                    className="hover:text-clr-main transition-colors duration-300"
                  >
                    <MdKeyboardDoubleArrowRight className="inline-block mr-2 text-clr-main" />
                    Swift Home Sales
                  </Link>
                </li>
                <li className="text-white mb-4">
                  <Link
                    to={PATH_INDEX}
                    className="hover:text-clr-main transition-colors duration-300"
                  >
                    <MdKeyboardDoubleArrowRight className="inline-block mr-2 text-clr-main" />
                    Elite Realty Services
                  </Link>
                </li>
                <li className="text-white mb-4">
                  <Link
                    to={PATH_INDEX}
                    className="hover:text-clr-main transition-colors duration-300"
                  >
                    <MdKeyboardDoubleArrowRight className="inline-block mr-2 text-clr-main" />
                    Dream Property Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-12">
              <h5 className="mb-6 text-xl text-white font-medium">
                Our gallery
              </h5>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 max-w-[180px]">
                <div>
                  <img src={HOUSE_1} alt={IMG_ALT} className="rounded-md" />
                </div>
                <div>
                  <img src={HOUSE_2} alt={IMG_ALT} className="rounded-md" />
                </div>
                <div>
                  <img src={HOUSE_3} alt={IMG_ALT} className="rounded-md" />
                </div>
                <div>
                  <img src={HOUSE_4} alt={IMG_ALT} className="rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-1/2 h-screen bg-white absolute top-0 left-0 z-20 transition-transform duration-500 ${
          !isClose ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-10 flex justify-end items-center">
          <IoCloseCircleOutline
            className="me-2 text-2xl text-clr-main"
            onClick={() => setIsClose(true)}
          />
        </div>
        <ul className="h-1/2 flex flex-col justify-center ps-4 gap-3">
          <li className="mb-2">
            <NavLink
              to={PATH_INDEX}
              className={({ isActive }) => {
                return isActive
                  ? "text-3xl text-clr-main ps-2 font-medium inline-block"
                  : "text-xl font-medium";
              }}
              onClick={() => setIsClose(true)}
            >
              Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to={PATH_REAL_ESTATE}
              className={({ isActive }) => {
                return isActive
                  ? "text-3xl text-clr-main ps-2 font-medium inline-block"
                  : "text-xl font-medium";
              }}
              onClick={() => setIsClose(true)}
            >
              Real Estate
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to={PATH_BLOG}
              className={({ isActive }) => {
                return isActive
                  ? "text-3xl text-clr-main ps-2 font-medium inline-block"
                  : "text-xl font-medium";
              }}
              onClick={() => setIsClose(true)}
            >
              Blog
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to={PATH_LOGIN}
              className={({ isActive }) => {
                return isActive
                  ? "text-3xl text-clr-main ps-2 font-medium inline-block"
                  : "text-xl font-medium";
              }}
              onClick={() => setIsClose(true)}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
