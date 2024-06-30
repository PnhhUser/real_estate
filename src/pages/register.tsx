import { Link } from "react-router-dom";
import { InputField } from "../components/input";
import { IMG_ALT } from "../constants/constant";
import { HOUSE_11 } from "../constants/img";
import { PATH_LOGIN } from "../constants/path";

function Register() {
  return (
    <div className="w-full bg-main">
      <div className="container mx-auto">
        <div className="flex flex-wrap py-10 px-4">
          <div className="lg:w-1/2 w-full">
            <div>
              <img
                src={HOUSE_11}
                alt={IMG_ALT}
                className="w-full h-full object-contain lg:rounded-s-md rounded-t-md"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-white lg:rounded-e-md rounded-b-md pb-10 md:mb-0">
            <form className="px-10 py-4">
              <div className="mb-4">
                <h4 className="text-[1rem] text-clr-main mb-4 font-bold">
                  Sign Up to CityScape
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="md:col-span-1 col-span-2">
                  <label
                    htmlFor="name"
                    className="font-semibold mb-2 inline-block"
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
                <div className="md:col-span-1 col-span-2">
                  <label
                    htmlFor="email"
                    className="font-semibold mb-2 inline-block"
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
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 inline-block"
                >
                  Your password
                </label>
                <InputField
                  type="password"
                  id="password"
                  className="w-full h-14"
                  placeholder="Your password"
                />
              </div>
              <div className="w-full"></div>
              <button className="w-full h-14 main-gradient rounded uppercase text-white text-md mt-4">
                Register
              </button>
              <div className="w-full text-center my-4">
                <p className="text-sm">
                  Already Have An Account?
                  <Link to={PATH_LOGIN} className="ms-2 text-clr-main">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
