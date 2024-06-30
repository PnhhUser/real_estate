import { FaCircleCheck, FaLocationDot } from "react-icons/fa6";
import { IMG_ALT } from "../constants/constant";
import {
  HOUSE_1,
  HOUSE_2,
  HOUSE_3,
  HOUSE_4,
  HOUSE_7,
  HOUSE_8,
  HOUSE_9,
  ICON_2,
  ICON_3,
  ICON_4,
  ICON_5,
  ICON_6,
  ICON_7,
  ICON_NET,
  IMG_ABOUT,
  IMG_DOT,
  IMG_ESTASE,
  IMG_SHAPE,
} from "../constants/img";
import { PATH_BLOG, PATH_INDEX, PATH_REAL_ESTATE } from "../constants/path";
import { Link, NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { InputField } from "../components/input";

function Index() {
  return (
    <div className="bg-main">
      {/* banner  */}
      <div className="relative z-[1px]">
        <img
          src={IMG_DOT}
          alt={IMG_ALT}
          className="absolute inset-0 -z-[1px]"
        />
        <img
          src={IMG_SHAPE}
          alt={IMG_ALT}
          className="absolute right-0 top-[10%] max-w-[14%] -z-[1px]"
        />
        <div className="lg:max-w-[1310px] w-full m-auto">
          <div className="pt-20 md:mx-5">
            <div className="flex flex-wrap px-4 md:px-0">
              <div className="md:w-1/2 w-full">
                <div className="relative">
                  <div className="max-w-[610px]">
                    <span className="mb-2 text-clr-main uppercase font-medium md:font-normal">
                      FinTech Fusion
                    </span>
                    <h1 className="md:text-[4rem] text-[2.2rem] font-semibold leading-none mb-5">
                      Your trusted real estate partner
                    </h1>
                    <p className="max-w-[552px] text-gray-500">
                      Unlock the Power of Real Estate Making Your Real Estate
                      Dreams a Reality Real Estate here Unlock the Power of Real
                      Estate.
                    </p>
                    <Link
                      to={PATH_REAL_ESTATE}
                      className="uppercase main-gradient text-white md:px-10 md:py-5 px-8 py-4 inline-block mt-10 rounded"
                    >
                      <span className="pe-2">find now</span>
                      <FaLongArrowAltRight className="inline-block" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full mt-10">
                <div className="relative">
                  <img src={IMG_ESTASE} alt={IMG_ALT} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about more */}
      <div className="w-full py-20 bg-white mt-40">
        <div className="container m-auto">
          <div className="flex flex-col lg:flex-row px-4 lg:px-0">
            <div className="lg:w-1/2 w-full">
              <img src={IMG_ABOUT} alt={IMG_ALT} />
            </div>
            <div className="lg:w-1/2 w-full">
              <p className="text-clr-main uppercase mb-2 mt-4 lg:mt-0 font-medium md:font-normal">
                About us
              </p>
              <h3 className="lg:text-[3rem] text-[2.2rem] md:max-w-[500px] leading-none font-medium mb-5">
                Unlocking the door to your a the new home
              </h3>
              <p className="text-slate-500">
                Real estate is a lucrative industry that involves the buying
                selling and renting of properties. It encompasses residential
                commercial and industrial properties Real estate agents play a
                crucial role in facilitating real estate
              </p>
              <ul className="font-semibold mt-10 flex flex-wrap">
                <li className="md:w-1/2 w-full py-2 pl-2">
                  <FaCircleCheck className="inline-block mr-2 text-clr-main" />
                  Dream Property Solutions
                </li>
                <li className="md:w-1/2 w-full py-2 pl-2">
                  <FaCircleCheck className="inline-block mr-2 text-clr-main" />
                  Prestige Property Management
                </li>
                <li className="md:w-1/2 w-full py-2 md:pl-10 pl-2">
                  <FaCircleCheck className="inline-block mr-2 text-clr-main" />
                  Secure Property Partners
                </li>
                <li className="md:w-1/2 w-full py-2 md:pl-10 pl-2">
                  <FaCircleCheck className="inline-block mr-2 text-clr-main" />
                  Global Real Estate Investments
                </li>
              </ul>
              <div className="mt-20">
                <Link
                  to={PATH_BLOG}
                  className="uppercase border-gradient px-16 py-6 rounded text-lg font-medium"
                >
                  more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* property type */}
      <div className="w-full my-20 px-4">
        <div className="container mx-auto">
          <p className="text-clr-main font-medium md:font-normal">
            PROPERTY TYPE
          </p>
          <h3 className="md:text-[2.5rem] text-[2rem] font-medium max-w-[600px] leading-none">
            Investing in real estate made it lot easy
          </h3>
          <div className="flex flex-wrap gap-6 mt-16">
            {/* box 1 */}
            <div className="flex-[0, 0, auto] md:w-[48%] lg:w-[32%] w-full property-item">
              <div className="width-full border-[1px] border-slate-300 rounded p-8">
                <div className="flex w-full gap-6">
                  <div className="max-w-[55px]">
                    <img src={ICON_NET} alt={IMG_ALT} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl title font-semibold">
                      Prestige Management
                    </h4>
                    <p className="my-2">
                      Real estate is a lucrative ind involves the buying selling
                      and reproperties. It encompa
                    </p>
                    <Link to={PATH_BLOG} className="more">
                      <span className="font-semibold ">More</span>
                      <FaLongArrowAltRight className="inline-block ms-2 icon-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* box 2 */}
            <div className="flex-[0, 0, auto] md:w-[48%] lg:w-[32%] w-full property-item">
              <div className="width-full border-[1px] border-slate-300 rounded p-8">
                <div className="flex w-full gap-6">
                  <div className="max-w-[55px]">
                    <img src={ICON_2} alt={IMG_ALT} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl title font-semibold">
                      Prime Investments
                    </h4>
                    <p className="my-2">
                      Real estate is a lucrative ind involves the buying selling
                      and reproperties. It encompa
                    </p>
                    <Link to={PATH_BLOG} className="more">
                      <span className="font-semibold">More</span>
                      <FaLongArrowAltRight className="inline-block ms-2 icon-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* box 3  */}
            <div className="flex-[0, 0, auto] md:w-[48%] lg:w-[32%] w-full property-item">
              <div className="width-full border-[1px] border-slate-300 rounded p-8">
                <div className="flex w-full gap-6">
                  <div className="max-w-[55px]">
                    <img src={ICON_3} alt={IMG_ALT} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl title font-semibold">
                      SmartHouse Agency
                    </h4>
                    <p className="my-2">
                      Real estate is a lucrative ind involves the buying selling
                      and reproperties. It encompa
                    </p>
                    <Link to={PATH_BLOG} className="more">
                      <span className="font-semibold">More</span>
                      <FaLongArrowAltRight className="inline-block ms-2 icon-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* box 4 */}
            <div className="flex-[0, 0, auto] md:w-[48%] lg:w-[32%] w-full property-item">
              <div className="width-full border-[1px] border-slate-300 rounded p-8">
                <div className="flex w-full gap-6">
                  <div className="max-w-[55px]">
                    <img src={ICON_4} alt={IMG_ALT} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl title font-semibold">
                      Reliable Rentals
                    </h4>
                    <p className="my-2">
                      Real estate is a lucrative ind involves the buying selling
                      and reproperties. It encompa
                    </p>
                    <Link to={PATH_BLOG} className="more">
                      <span className="font-semibold">More</span>
                      <FaLongArrowAltRight className="inline-block ms-2 icon-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* box 5 */}
            <div className="flex-[0, 0, auto] md:w-[48%] lg:w-[32%] w-full property-item">
              <div className="width-full border-[1px] border-slate-300 rounded p-8">
                <div className="flex w-full gap-6">
                  <div className="max-w-[55px]">
                    <img src={ICON_5} alt={IMG_ALT} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl title font-semibold">
                      Golden Key Properties
                    </h4>
                    <p className="my-2">
                      Real estate is a lucrative ind involves the buying selling
                      and reproperties. It encompa
                    </p>
                    <Link to={PATH_BLOG} className="more">
                      <span className="font-semibold">More</span>
                      <FaLongArrowAltRight className="inline-block ms-2 icon-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* box 6 */}
            <div className="flex-[0, 0, auto] md:w-[48%] lg:w-[32%] w-full property-item">
              <div className="width-full border-[1px] border-slate-300 rounded p-8">
                <div className="flex w-full gap-6">
                  <div className="max-w-[55px]">
                    <img src={ICON_6} alt={IMG_ALT} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl title font-semibold">
                      Swift Home Sales
                    </h4>
                    <p className="my-2">
                      Real estate is a lucrative ind involves the buying selling
                      and reproperties. It encompa
                    </p>
                    <Link to={PATH_BLOG} className="more">
                      <span className="font-semibold">More</span>
                      <FaLongArrowAltRight className="inline-block ms-2 icon-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* real estate */}
      <div className="w-full">
        <div className="container mx-auto">
          <h3 className="font-semibold text-[3rem] text-center max-w-[600px] mx-auto mb-10">
            <span className="text-clr-main">Real estate</span> Investing in made
            it lot easy
          </h3>
          {/* option */}
          <div className="flex flex-wrap gap-6 justify-center">
            <NavLink
              to={PATH_INDEX}
              className="text-white border-gradient max-w-52 w-32 py-2 text-center rounded"
            >
              Houses
            </NavLink>
            <NavLink
              to={PATH_INDEX}
              className="text-white border-gradient max-w-52 w-32 py-2 text-center rounded"
            >
              Apartments
            </NavLink>
            <NavLink
              to={PATH_INDEX}
              className="text-white border-gradient max-w-52 w-32 py-2 text-center rounded"
            >
              Penthouse
            </NavLink>
            <NavLink
              to={PATH_INDEX}
              className="text-white border-gradient max-w-52 w-32 py-2 text-center rounded"
            >
              Condominium
            </NavLink>
            <NavLink
              to={PATH_INDEX}
              className="text-white border-gradient max-w-52 w-32 py-2 text-center rounded"
            >
              Villa
            </NavLink>
          </div>

          <div className="flex flex-wrap gap-6 pb-32 mx-4 lg:mx-0">
            <div className="flex-[0,0,auto] lg:w-[32%] md:w-[48%] w-full relative mt-14 mb-24">
              <div className="overflow-hidden rounded">
                <img
                  src={HOUSE_1}
                  alt={IMG_ALT}
                  className="hover:scale-[1.1] transition-transform duration-700"
                />
              </div>
              <div className="w-[90%] p-6 bg-white absolute -bottom-36 right-0 shadow rounded-s-md rounded-br-md">
                <h4 className="font-semibold max-w-[250px] text-[1.2rem] mb-2">
                  Turning Dreams into Addresses Home State
                </h4>
                <p className="mb-2 font-medium text-xl">$456.00</p>
                <p className="mb-2 text-gray-500">
                  <FaLocationDot className="text-clr-main inline-block me-2" />
                  <span className="align-middle">
                    66 Broklyant, New York America
                  </span>
                </p>
                <Link
                  to={PATH_REAL_ESTATE}
                  className="text-clr-main inline-block mt-5 next"
                >
                  <span className="uppercase font-medium">Next</span>
                  <FaLongArrowAltRight className="inline-block ms-3 icon-arrow duration-300" />
                </Link>
              </div>
            </div>
            <div className="flex-[0,0,auto] lg:w-[32%] md:w-[48%] w-full relative mt-14 mb-24">
              <div className="rounded overflow-hidden">
                <img
                  src={HOUSE_2}
                  alt={IMG_ALT}
                  className="hover:scale-[1.1] transition-transform duration-700"
                />
              </div>
              <div className="w-[90%] p-6 bg-white absolute -bottom-36 right-0 shadow rounded-s-md rounded-br-md">
                <h4 className="font-semibold max-w-[250px] text-[1.2rem] mb-2">
                  Turning Dreams into Addresses Home State
                </h4>
                <p className="mb-2 font-medium text-xl">$456.00</p>
                <p className="mb-2 text-gray-500">
                  <FaLocationDot className="text-clr-main inline-block me-2" />
                  <span className="align-middle">
                    66 Broklyant, New York America
                  </span>
                </p>
                <Link
                  to={PATH_REAL_ESTATE}
                  className="text-clr-main inline-block mt-5 next"
                >
                  <span className="uppercase font-medium">Next</span>
                  <FaLongArrowAltRight className="inline-block ms-3 icon-arrow duration-300" />
                </Link>
              </div>
            </div>
            <div className="flex-[0,0,auto] lg:w-[32%] md:w-[48%] w-full relative mt-14 mb-24">
              <div className="rounded overflow-hidden">
                <img
                  src={HOUSE_3}
                  alt={IMG_ALT}
                  className="hover:scale-[1.1] transition-transform duration-700"
                />
              </div>
              <div className="w-[90%] p-6 bg-white absolute -bottom-36 right-0 shadow rounded-s-md rounded-br-md">
                <h4 className="font-semibold max-w-[250px] text-[1.2rem] mb-2">
                  Turning Dreams into Addresses Home State
                </h4>
                <p className="mb-2 font-medium text-xl">$456.00</p>
                <p className="mb-2 text-gray-500">
                  <FaLocationDot className="text-clr-main inline-block me-2" />
                  <span className="align-middle">
                    66 Broklyant, New York America
                  </span>
                </p>
                <Link
                  to={PATH_REAL_ESTATE}
                  className="text-clr-main inline-block mt-5 next"
                >
                  <span className="uppercase font-medium">Next</span>
                  <FaLongArrowAltRight className="inline-block ms-3 icon-arrow duration-300" />
                </Link>
              </div>
            </div>
            <div className="flex-[0,0,auto] lg:w-[32%] md:w-[48%] w-full relative mt-14 mb-24">
              <div className="rounded overflow-hidden">
                <img
                  src={HOUSE_4}
                  alt={IMG_ALT}
                  className="hover:scale-[1.1] transition-transform duration-700"
                />
              </div>
              <div className="w-[90%] p-6 bg-white absolute -bottom-36 right-0 shadow rounded-s-md rounded-br-md">
                <h4 className="font-semibold max-w-[250px] text-[1.2rem] mb-2">
                  Turning Dreams into Addresses Home State
                </h4>
                <p className="mb-2 font-medium text-xl">$456.00</p>
                <p className="mb-2 text-gray-500">
                  <FaLocationDot className="text-clr-main inline-block me-2" />
                  <span className="align-middle">
                    66 Broklyant, New York America
                  </span>
                </p>
                <Link
                  to={PATH_REAL_ESTATE}
                  className="text-clr-main inline-block mt-5 next"
                >
                  <span className="uppercase font-medium">Next</span>
                  <FaLongArrowAltRight className="inline-block ms-3 icon-arrow duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact  */}
      <div className="w-full bg-white py-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-4 lg:mx-0">
            <div className="lg:w-[32%] w-full">
              <p className="uppercase text-clr-main mb-2">Contact</p>
              <h3 className="font-semibold text-[2rem] max-w-[300px] leading-none mb-4">
                They chose perfect the property
              </h3>
              <p className="text-gray-500">
                Real estate is a lucrative ind involves the selling and a
                reproperties. It encompasses residential
              </p>
              <div className="my-10 border-[1px] border-gray-300 p-10 rounded">
                <div className="flex flex-wrap w-full">
                  <div className="flex-[0,0,auto] w-[32%]">
                    <img src={ICON_7} alt={IMG_ALT} />
                  </div>
                  <div className="flex-[0,0,auto] w-[68%]">
                    <p className="text-gray-500">Need help?</p>
                    <p className="font-semibold text-xl">(307) 555-0133</p>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <p className="text-left text-gray-500">
                    Real estate is a lucrative ind involves the selling and a
                    reproperties. It encompasses residential
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[68%] w-full lg:pl-8">
              <div className="border-[1px] lg:p-8 p-4 rounded shadow">
                <form className="lg:px-10 py-8">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="col-span-1">
                      <label
                        htmlFor="name"
                        className="font-medium inline-block mb-2"
                      >
                        Your Name
                      </label>
                      <InputField
                        type="text"
                        id="name"
                        className="w-full h-14"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-span-1">
                      <label
                        htmlFor="phone"
                        className="font-medium inline-block mb-2"
                      >
                        Your Phone
                      </label>
                      <InputField
                        type="text"
                        id="phone"
                        className="w-full h-14"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="font-medium inline-block mb-2"
                    >
                      Your Email
                    </label>
                    <InputField
                      type="email"
                      id="email"
                      className="w-full h-14"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="font-medium inline-block mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="border-[1px] w-full h-28 outline-none rounded indent-4 py-3 ipt"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                  <button className="w-full h-14 main-gradient rounded uppercase text-white text-md">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog   */}
      <div className="w-full">
        <div className="container mx-auto">
          <div className="py-16">
            <p className="text-clr-main text-center">LATEST BLOG AND NEWS</p>
            <h3 className="font-medium text-[2rem] text-center max-w-[420px] mx-auto">
              Investing in estate made lot easy
            </h3>
          </div>
          <div className="flex flex-wrap gap-6 mx-4 lg:mx-0">
            <div className="mb-10 flex-[0,0,auto] lg:w-[32%] md:w-[48%] w-full">
              <div>
                <img src={HOUSE_7} alt={IMG_ALT} className="rounded" />
              </div>
              <div className="py-2">
                <Link
                  to={PATH_BLOG}
                  className="font-bold text-xl max-w-[350px] inline-block hover:text-clr-main"
                >
                  Your journey to home ownership starts here
                </Link>
                <div>
                  <button className="border-gradient py-3 px-6 rounded mt-4">
                    Read more
                    <FaLongArrowAltRight className="ms-2 inline-block" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-10 flex-[0,0,auto] lg:w-[32%] md:w-[48%] w-full">
              <div>
                <img src={HOUSE_8} alt={IMG_ALT} className="rounded" />
              </div>
              <div className="py-2">
                <Link
                  to={PATH_BLOG}
                  className="font-bold text-xl max-w-[350px] inline-block hover:text-clr-main"
                >
                  Your journey to home ownership starts here
                </Link>
                <div>
                  <button className="border-gradient py-3 px-6 rounded mt-4">
                    Read more
                    <FaLongArrowAltRight className="ms-2 inline-block" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-10 flex-[0,0,auto] lg:w-[32%] md:w-[48%] w-full">
              <div>
                <img src={HOUSE_9} alt={IMG_ALT} className="rounded" />
              </div>
              <div className="py-2">
                <Link
                  to={PATH_BLOG}
                  className="font-bold text-xl max-w-[350px] inline-block hover:text-clr-main"
                >
                  Your journey to home ownership starts here
                </Link>
                <div>
                  <button className="border-gradient py-3 px-6 rounded mt-4">
                    Read more
                    <FaLongArrowAltRight className="ms-2 inline-block" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
