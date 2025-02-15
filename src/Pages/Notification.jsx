import React, { useState } from "react";
import { Link } from "react-router-dom";
import Links from "../Links";
import {
  image,
  nilelogowhite,
  notification,
  starhalf,
  starsquare,
  star,
  commentblock,
  bitcoingraph,
  bitcoinbag,
  bitcoin,
  bitcoindown,
  moneysend,
  notification1,
  comment,
} from "../assets";
import NotificationContent from "../Components/NotificationContents/NotificationContent";

const Notification = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };
  return (
    <>
      <div className="bg-[#F5F5F5] pb-60">
        <div className="flex">
          {/* Overlay for small screens */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 lg:hidden"
              onClick={closeSidebar}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-[290px] z-10 bg-[#004324] border-2 text-white p-5 transition-transform transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            <img
              src={nilelogowhite}
              alt=""
              className="w-[170px] flex mx-auto"
            />
            <Links />
          </div>

          {/* Navbar */}
          <div className="flex-grow lg:ml-64">
            <nav className="bg-[#EAF4E2] p-4 shadow-md flex items-center gap-5 fixed w-full">
              <button
                className="lg:hidden text-gray-800 z-20"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      sidebarOpen
                        ? "M6 18L18 6M6 6l12 12" // Close icon
                        : "M4 6h16M4 12h16M4 18h16" // Menu icon
                    }
                  />
                </svg>
              </button>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-20">
                  <img src={notification1} alt="" />
                  <h1 className="text-[32px] font-bold">Notifications</h1>
                </div>
                <div className="flex items-center gap-10 ml-[350px]">
                  <div className="relative">
                    <label htmlFor="Search" className="sr-only">
                      {" "}
                      Search{" "}
                    </label>

                    <input
                      type="text"
                      id="Search"
                      placeholder=""
                      className="w-[300px] rounded-md border-[#6E6E6E] border-2 p-8 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
                      <button
                        type="button"
                        className="text-gray-600 hover:text-gray-700"
                      >
                        <span className="sr-only">Search</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                  <div>
                    <Link to="/notification">
                      <img src={notification} alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link to="/profilesetting">
                      <img src={image} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            <div className="px-24 mt-72">
              <div>
                <img
                  src={comment}
                  alt=""
                  className="flex justify-center mx-auto"
                />
                <h1 className="text-[24px] font-extrabold text-center">
                  Nothing To See Yet
                </h1>
                <p className="text-[#6E6E6E] font-bold text-center">
                  Your Notifications Will Show Here Once <br /> There’s One
                </p>
              </div>
              <div className="flex justify-center mt-3">
                <Link to="/dashboard">
                  <button className="text-[#ffffff] bg-[#004324] p-3 font-bold rounded-md">
                    Go To Dashboard
                  </button>
                </Link>
              </div>

              <NotificationContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
