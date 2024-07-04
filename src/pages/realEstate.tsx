import { FiGrid, FiList } from "react-icons/fi";
import { HOUSE_1, HOUSE_2, HOUSE_3 } from "../constants/img";
import { IMG_ALT } from "../constants/constant";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PATH_REAL_ESTATE } from "../constants/path";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

type viewMode = "box" | "listBox";

enum VIEWMODE {
  BOX = "box",
  LISTBOX = "listBox",
}

function RealEstate() {
  const [viewMode, setViewMode] = useState<viewMode>("box");
  const [isFilter, setIsFilter] = useState<boolean>(false);

  return (
    <div>
      <div className="w-full bg-main">
        <div className="xl:container xl:mx-auto mx-4">
          <div className="grid grid-cols-12 pt-16 py-32">
            {/* select */}
            <div className="col-span-6 mb-4">
              <div className="flex gap-3 items-center">
                <div
                  className={`border-[1px] p-2 rounded border-clr-main cursor-pointer ${
                    viewMode === VIEWMODE.BOX ? "bg-clr-main" : ""
                  }`}
                  onClick={() => setViewMode(VIEWMODE.BOX)}
                >
                  <FiGrid
                    className={
                      viewMode === VIEWMODE.BOX ? "text-white" : "text-clr-main"
                    }
                  />
                </div>
                <div
                  className={`border-[1px] p-2 rounded border-clr-main cursor-pointer ${
                    viewMode === VIEWMODE.LISTBOX ? "bg-clr-main" : ""
                  }`}
                  onClick={() => setViewMode(VIEWMODE.LISTBOX)}
                >
                  <FiList
                    className={
                      viewMode === VIEWMODE.LISTBOX
                        ? "text-white"
                        : "text-clr-main"
                    }
                  />
                </div>
                <div
                  className={`border-[1px] p-2 rounded border-clr-main cursor-pointer md:hidden ${
                    isFilter ? "bg-clr-main" : ""
                  }`}
                  onClick={() => setIsFilter(!isFilter)}
                >
                  <CiFilter
                    className={isFilter ? "text-white" : "text-clr-main"}
                  />
                </div>
              </div>
            </div>
            {/* option checkbox  */}
            <div
              className={`col-start-1 col-end-5 fixed md:relative top-1/2 left-0 -translate-y-1/2 w-1/2 md:w-full z-30 opacity-95 transition-transform duration-700
                ${
                  isFilter
                    ? "translate-x-0"
                    : "-translate-x-full md:translate-x-0"
                }`}
            >
              <div className="py-2">
                <div className="border-[1px] border-gray-200 rounded max-w-[350px] py-2 bg-white shadow ps-3">
                  <p className="font-semibold text-lg mb-4">Status</p>
                  <ul className="mb-6">
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        name="all"
                        id="all"
                      />
                      <label className="cursor-pointer" htmlFor="all">
                        All
                      </label>
                    </li>
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        name="buy"
                        id="buy"
                      />
                      <label className="cursor-pointer" htmlFor="buy">
                        Buy
                      </label>
                    </li>
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        name="rent"
                        id="rent"
                      />
                      <label className="cursor-pointer" htmlFor="rent">
                        Rent
                      </label>
                    </li>
                  </ul>
                  <p className="font-semibold text-lg mb-4">Property Type</p>
                  <ul className="mb-6">
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        name="house"
                        id="house"
                      />
                      <label className="cursor-pointer" htmlFor="house">
                        House
                      </label>
                    </li>
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        name="single"
                        id="single"
                      />
                      <label className="cursor-pointer" htmlFor="single">
                        Single Family
                      </label>
                    </li>
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        id="apartment"
                        name="apartment"
                      />
                      <label className="cursor-pointer" htmlFor="apartment">
                        Apartment
                      </label>
                    </li>
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        id="luxury"
                        name="luxury"
                      />
                      <label className="cursor-pointer" htmlFor="luxury">
                        Luxury Home
                      </label>
                    </li>
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        id="studio"
                        name="studio"
                      />
                      <label className="cursor-pointer" htmlFor="studio">
                        Studio
                      </label>
                    </li>
                  </ul>
                  <p className="font-semibold text-lg mb-4">Price Renge</p>
                  <ul className="mb-6">
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        id="low"
                        name="low"
                      />
                      <label className="cursor-pointer" htmlFor="low">
                        Low Budget
                      </label>
                    </li>
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        id="medium"
                        name="medium"
                      />
                      <label className="cursor-pointer" htmlFor="medium">
                        Medium
                      </label>
                    </li>
                    <li className="my-1">
                      <input
                        className="inline-block me-2"
                        type="checkbox"
                        name="high"
                        id="high"
                      />
                      <label className="cursor-pointer" htmlFor="high">
                        High Budget
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* real estate */}
            <div className="md:col-start-5 md:col-end-13 col-span-12 md:px-6 xl:px-0">
              <div className="py-2">
                <div className="flex flex-wrap gap-6">
                  <div
                    className={`flex-[0,0,auto] ${
                      viewMode === VIEWMODE.BOX
                        ? "lg:w-[48%] md:w-[47%] mb-36 md:mb-56 lg:mb-36"
                        : "md:w-[100%] h-[250px]"
                    }  w-full relative`}
                  >
                    <div
                      className={`${
                        viewMode === VIEWMODE.BOX
                          ? "overflow-hidden rounded"
                          : "overflow-hidden w-[30%] h-full rounded"
                      }`}
                    >
                      <img
                        src={HOUSE_1}
                        alt={IMG_ALT}
                        className="hover:scale-[1.1] transition-transform duration-700 w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`${
                        viewMode === VIEWMODE.BOX
                          ? "w-[90%] p-6 bg-white absolute -bottom-28 md:-bottom-56 lg:-bottom-36 right-0 shadow rounded-s-md rounded-br-md"
                          : "w-[70%] h-full ps-6 absolute top-0 right-0 rounded-e-md"
                      }`}
                    >
                      <h4 className="font-semibold md:max-w-[250px] text-[1.2rem] mb-2">
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
                        className="text-clr-main inline-block md:mt-5 mt-3 next"
                      >
                        <span className="uppercase font-medium">Detail</span>
                        <FaLongArrowAltRight className="inline-block ms-3 icon-arrow duration-300" />
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`flex-[0,0,auto] ${
                      viewMode === VIEWMODE.BOX
                        ? "lg:w-[48%] md:w-[47%] mb-36 md:mb-56 lg:mb-36"
                        : "md:w-[100%] h-[250px]"
                    }  w-full relative`}
                  >
                    <div
                      className={`${
                        viewMode === VIEWMODE.BOX
                          ? "overflow-hidden rounded"
                          : "overflow-hidden w-[30%] h-full rounded"
                      }`}
                    >
                      <img
                        src={HOUSE_2}
                        alt={IMG_ALT}
                        className="hover:scale-[1.1] transition-transform duration-700 w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`${
                        viewMode === VIEWMODE.BOX
                          ? "w-[90%] p-6 bg-white absolute -bottom-28 md:-bottom-56 lg:-bottom-36 right-0 shadow rounded-s-md rounded-br-md"
                          : "w-[70%] h-full ps-6 absolute top-0 right-0 rounded-e-md"
                      }`}
                    >
                      <h4 className="font-semibold md:max-w-[250px] text-[1.2rem] mb-2">
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
                        className="text-clr-main inline-block md:mt-5 mt-3 next"
                      >
                        <span className="uppercase font-medium">Detail</span>
                        <FaLongArrowAltRight className="inline-block ms-3 icon-arrow duration-300" />
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`flex-[0,0,auto] ${
                      viewMode === VIEWMODE.BOX
                        ? "lg:w-[48%] md:w-[47%] mb-36 md:mb-56 lg:mb-36"
                        : "md:w-[100%] h-[250px]"
                    }  w-full relative`}
                  >
                    <div
                      className={`${
                        viewMode === VIEWMODE.BOX
                          ? "overflow-hidden rounded"
                          : "overflow-hidden w-[30%] h-full rounded"
                      }`}
                    >
                      <img
                        src={HOUSE_3}
                        alt={IMG_ALT}
                        className="hover:scale-[1.1] transition-transform duration-700 w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`${
                        viewMode === VIEWMODE.BOX
                          ? "w-[90%] p-6 bg-white absolute -bottom-28 md:-bottom-56 lg:-bottom-36 right-0 shadow rounded-s-md rounded-br-md"
                          : "w-[70%] h-full ps-6 absolute top-0 right-0 rounded-e-md"
                      }`}
                    >
                      <h4 className="font-semibold md:max-w-[250px] text-[1.2rem] mb-2">
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
                        className="text-clr-main inline-block md:mt-5 mt-3 next"
                      >
                        <span className="uppercase font-medium">Detail</span>
                        <FaLongArrowAltRight className="inline-block ms-3 icon-arrow duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RealEstate;
