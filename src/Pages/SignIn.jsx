import { useState } from "react";
import { nilelogosolid } from "../assets";
import { Link } from "react-router-dom";
import { useLogUserIn } from "../datahooks/users/userhooks";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = useLogUserIn();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(isPending);
    try {
      mutate({
        email,
        password,
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mt-28 mb-10">
      <div>
        <img
          src={nilelogosolid}
          alt=""
          className="flex justify-center mx-auto"
        />
        <h1 className="text-[#333333] text-center text-[24px] font-bold mt-8">
          Welcome To The Merchant Dashboard
        </h1>
      </div>

      <div className="flex justify-center mx-auto">
        <form onSubmit={handleLogin} className="space-y-6 mt-6">
          <div>
            <label
              htmlFor="EmailAddress"
              className="block text-[16px] font-bold text-[#333333]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="EmailAddress"
              name="email_address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ashimiuade@gmail.com"
              className="mt-1 w-[450px] p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="Password"
              className="block text-[16px] font-bold text-[#333333]"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
              className="mt-1 w-[450px] p-3 rounded-md border-[#333333] border-2 bg-white text-sm text-gray-700 shadow-sm"
              required
            />
          </div>

          <div className="flex items-center justify-center mx-auto gap-10">
            <label
              htmlFor="MarketingAccept"
              className="flex gap-1 items-center"
            >
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />
              <span className="text-[14px] text-[#333333]">Remember Me</span>
            </label>
            <div className="flex items-center gap-1">
              <h1 className="text-[#333333] text-[14px]">
                Forgotten Password?
              </h1>
              <Link to="/email">
                <p className="text-[#000000] font-bold">Click Here</p>
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="text-[#ffffff] bg-[#004324] w-full p-2 rounded-md mt-5 flex items-center justify-center"
            disabled={isPending}
          >
            {isPending ? (
              <div className="w-4 h-4 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Log In"
            )}
          </button>

          <div className="flex items-center gap-1 justify-center mt-3">
            <h1 className="text-[#333333] text-[16px]">
              Dont Have An Account?
            </h1>
            <Link to="/signup">
              <p className="text-[#000000] font-bold">Click Here</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
