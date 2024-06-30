import { Link } from "react-router-dom";
import { InputField } from "../components/input";
import { IMG_ALT } from "../constants/constant";
import { HOUSE_10 } from "../constants/img";
import { PATH_FORGOT_PWD, PATH_REGISTER } from "../constants/path";

function Login() {
  return (
    <div className="w-full bg-main">
      <div className="container mx-auto">
        <div className="flex flex-wrap py-10 px-4">
          <div className="lg:w-1/2 w-full">
            <div>
              <img
                src={HOUSE_10}
                alt={IMG_ALT}
                className="w-full h-full object-contain lg:rounded-s-md rounded-t-md"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-white lg:rounded-e-md rounded-b-md pb-10 md:mb-0">
            <form className="px-10 py-4">
              <div className="mb-4">
                <h4 className="text-[1rem] text-clr-main mb-4 font-bold">
                  Sign In to CityScape
                </h4>
              </div>
              <div className="mb-4">
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
              <div className="w-full text-right">
                <Link to={PATH_FORGOT_PWD} className="text-clr-main text-sm">
                  Forgot Password ?
                </Link>
              </div>
              <button className="w-full h-14 main-gradient rounded uppercase text-white text-md mt-4">
                Login
              </button>
              <div className="w-full text-center my-4">
                <p className="text-sm">
                  Don't Have An Account?
                  <Link to={PATH_REGISTER} className="ms-2 text-clr-main">
                    Register
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

export default Login;
