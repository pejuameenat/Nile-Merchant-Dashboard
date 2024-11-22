import React from "react";
import { nilelogosolid, eye, lashesIcon } from "../assets";
import { Link } from "react-router-dom";
import LoginReviews from "../Components/LoginReviews/LoginReviews";
import CreateAccPaths from "../Components/CreateAccPaths/CreateAccPaths";
import { useShowPassword} from "../Context/Context";

const ForgotPassword = () => {
  const { showPassword, handleShowPassword } = useShowPassword();
  return (
    <section>
      <div className="container md:max-w-[700px] lg:max-w-[1184px] mx-auto mt-28 lg:flex gap-[120px] items-center bg-dimWhite rounded-lg p-8 lg:p-16 shadow-md shadow-dimWhite">
        <div className="mb-10">
          <div>
            <img
              src={nilelogosolid}
              alt="nile logo"
              className="flex justify-center mx-auto w-[165.33px] max-w-full"
            />
            <h1 className="text-[#333333] text-center text-[24px] font-bold mt-8">
              Recreate Your Merchant Password
            </h1>
          </div>

          {/* Input Fields */}
          <div className="relative mx-auto">
            <form action="#" className="space-y-6 mt-6">
              <div className="relative">
                <label
                  htmlFor="NewPassword"
                  className="block text-[16px] font-bold text-[#333333]"
                >
                  New Password
                </label>

                <input
                  type={showPassword.newPassword ? "text" : "password"}
                  id="NewPassword"
                  name="NewPassword"
                  placeholder="type password"
                  className={
                       "mt-1 w-full p-3 rounded-md border-lightGreen border bg-white text-sm text-gray-700 shadow-sm"
                  }
                />
                {showPassword.newPassword ? (
                  <img
                    src={lashesIcon}
                    className="absolute top-11 right-2 w-10 h-5"
                    alt="hide password icon"
                    loading="lazy"
                    onClick={() => handleShowPassword("NewPassword")}
                  />
                ) : (
                  <img
                    src={eye}
                    className="absolute top-11 right-2 w-7 h-4"
                    alt="hide password icon"
                    loading="lazy"
                    onClick={() => handleShowPassword("NewPassword")}
                  />
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="RepeatPassword"
                  className="block text-[16px] font-bold text-[#333333]"
                >
                  Repeat Password
                </label>

                <input
                  type={showPassword.confirmPassword ? "text" : "password"}
                  id="RepeatPassword"
                  name="RepeatPassword"
                  placeholder="type the same password"
                  className={
                   "mt-1 w-full p-3 rounded-md border-lightGreen border bg-white text-sm text-gray-700 shadow-sm"
                  }
                />
                {showPassword.confirmPassword ? (
                  <img
                    src={lashesIcon}
                    className="absolute top-11 right-2 w-10 h-5"
                    alt="hide password icon"
                    loading="lazy"
                    onClick={() => handleShowPassword("confirmPassword")}
                  />
                ) : (
                  <img
                    src={eye}
                    className="absolute top-11 right-2 w-7 h-4"
                    alt="hide password icon"
                    loading="lazy"
                    onClick={() => handleShowPassword("confirmPassword")}
                  />
                )}
              </div>

              {/* Reset Password Button */}
              <Link to="/">
                <div className="mt-5">
                  <button className="text-[#ffffff] bg-[#004324] w-full p-2 rounded-md">
                    Reset Password
                  </button>
                </div>
              </Link>
            </form>
          </div>
          <CreateAccPaths
            text="Dont Have An Account ?"
            path="/signup"
            linkText="Create one"
          />
        </div>
        <LoginReviews />
      </div>
    </section>
  );
};

export default ForgotPassword;
