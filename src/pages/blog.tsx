import { Link } from "react-router-dom";
import { IMG_ALT } from "../constants/constant";
import { BOLG_1 } from "../constants/img";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PATH_BLOG } from "../constants/path";

function Blog() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap py-16 px-4">
          <div className="md:w-[70%] w-full">
            {/* card blog */}

            <div className="flex flex-wrap w-full mb-10">
              <div className="md:w-[30%] w-full">
                <img
                  src={BOLG_1}
                  alt={IMG_ALT}
                  className="w-full object-contain rounded-md md:rounded-none"
                />
              </div>
              <div className="md:w-[70%] w-full md:ps-6">
                <h3 className="max-w-[500px] lg:text-3xl text-xl font-medium mb-4 mt-6 md:mt-0">
                  Experience the best in real estate services a here the
                  satisfaction
                </h3>
                <p className="text-sm mb-4 text-gray-500">
                  7/4/20024 - 11:10 - Posted by Admin
                </p>
                <p className="max-w-[400px] mb-10">
                  Real estate is a lucrative industry that involves the buying
                  selliand renting of properties. It encompasses residential
                  commercial and industrial properties Real estate agents play
                </p>
                <Link
                  to={PATH_BLOG}
                  className="border-gradient py-4 px-6 rounded"
                >
                  <span className="uppercase font-medium">Read more</span>
                  <FaLongArrowAltRight className="inline-block ms-2" />
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap w-full mb-10">
              <div className="md:w-[30%] w-full">
                <img
                  src={BOLG_1}
                  alt={IMG_ALT}
                  className="w-full object-contain rounded-md md:rounded-none"
                />
              </div>
              <div className="md:w-[70%] w-full md:ps-6">
                <h3 className="max-w-[500px] lg:text-3xl text-xl font-medium mb-4 mt-6 md:mt-0">
                  Experience the best in real estate services a here the
                  satisfaction
                </h3>
                <p className="text-sm mb-4 text-gray-500">
                  7/4/20024 - 11:10 - Posted by Admin
                </p>
                <p className="max-w-[400px] mb-10">
                  Real estate is a lucrative industry that involves the buying
                  selliand renting of properties. It encompasses residential
                  commercial and industrial properties Real estate agents play
                </p>
                <Link
                  to={PATH_BLOG}
                  className="border-gradient py-4 px-6 rounded"
                >
                  <span className="uppercase font-medium">Read more</span>
                  <FaLongArrowAltRight className="inline-block ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] w-full"></div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
