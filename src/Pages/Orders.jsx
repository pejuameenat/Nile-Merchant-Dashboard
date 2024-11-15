/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import Links from "../Links";
import {
  image,
  nilelogowhite,
  notification,
  trolley,
  shoppingcart,
  truck1,
  timer,
  shoppingcartremove,
} from "../assets";
import OrdersTable from "../Components/Orders/OrdersTable";
import { useFetchOrders } from "../datahooks/users/userhooks";

const Orders = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };
  const { data, isError, isFetching } = useFetchOrders();
  const [createOrderForm, setCreateOrderForm] = useState(false);
  return (
    <>
      {createOrderForm && (
        <div className=" w-full fixed grid place-items-center h-screen bg-black/40">
          <div className=" w-full h-full absolute top-0 left-0 "></div>
          <div
            className=" rounded-[8px] pt-[96px] pb-8 px-8 relative bg-white"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <img
              src="/public/ Cancel.svg"
              className=" size-8 absolute top-8 right-8"
              alt=""
            />
            <div className=" flex flex-col gap-4">
              <div className=" grid grid-cols-2 gap-16">
                <div className=" flex flex-col gap-2">
                  <label
                    className=" font-black  text-[16px]  leading-5 "
                    htmlFor="Customer Name"
                  >
                    Customer Name
                  </label>
                  <input
                    placeholder="Select Customer"
                    type="text"
                    className=" bg-[#F5F5F5]  rounded-[4px]  border-[#8ED06C] border-[1px] p-4 placeholder:text-[#6E6E6E80]"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label
                    className=" font-black  text-[16px]  leading-5 "
                    htmlFor="Sales Channel"
                  >
                    Sales Channel
                  </label>
                  <div className=" bg-[#F5F5F5]  rounded-[4px]  border-[#8ED06C] border-[1px] p-4 placeholder:text-[#6E6E6E80]">
                    <select name="selct" id="" disabled="disabled">
                      <option value="">Choose Sales Channel</option>
                    </select>
                    <img
                      className=" absolute  top-1/2 -translate-y-1/2 right-4"
                      src="/public/plus.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-16">
                <div className=" flex flex-col gap-2">
                  <label
                    className=" font-black  text-[16px]  leading-5 "
                    htmlFor="Product Name"
                  >
                    Product Name
                  </label>
                  <input
                    placeholder="Select Product"
                    type="text"
                    className=" bg-[#F5F5F5]  rounded-[4px]  border-[#8ED06C] border-[1px] p-4 placeholder:text-[#6E6E6E80]"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label
                    className=" font-black  text-[16px]  leading-5 "
                    htmlFor="Sales Channel"
                  >
                    Payment Status
                  </label>
                  <div className=" bg-[#F5F5F5]  rounded-[4px]  border-[#8ED06C] border-[1px] p-4 placeholder:text-[#6E6E6E80]">
                    <select
                      className=" appearance-none"
                      name="select"
                      id=""
                      disabled="disabled"
                    >
                      <option value="">Choose Payment Status</option>
                    </select>
                    <img
                      className=" absolute  top-1/2 -translate-y-1/2 right-4"
                      src="/public/plus.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-16">
                <div className=" flex flex-col gap-2">
                  <label
                    className=" font-black  text-[16px]  leading-5 "
                    htmlFor="Order Date"
                  >
                    Order Date
                  </label>
                  <input
                    placeholder="DD/MM/YY"
                    type="date"
                    className=" bg-[#F5F5F5]  rounded-[4px]  border-[#8ED06C] border-[1px] p-4 placeholder:text-[#6E6E6E80]"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setCreateOrderForm(true)}
              className=" flex bg-[#004324] mx-auto mt-16 rounded-[4px] gap-1 p-[10.5px]  text-white "
            >
              <img src="/public/plus.svg" alt="" />
              Create Order
            </button>
          </div>
        </div>
      )}
      <div className="bg-[#F5F5F5] pb-20">
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
            className={`fixed top-0 left-0 h-full w-[290px] z-20 bg-[#004324] border-2 text-white p-5 transition-transform transform ${
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
            <nav className="bg-[#EAF4E2] p-4 z-10 shadow-md flex items-center gap-5 fixed w-full">
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
                  <img src={trolley} alt="" />
                  <h1 className="text-[32px] font-bold">Orders & Shippings</h1>
                </div>
                <div className="flex items-center gap-10 ml-[250px]">
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

            {/* Cards */}
            <div className="p-6 mt-28 px-32">
              <div className="flex gap-28 justify-center">
                <div className="bg-[#FFFFFF] border-2 shadow-sm w-[273px] p-5 rounded-md">
                  <img src={shoppingcart} alt="" />
                  <h1 className="text-[#333333] text-[22px] font-bold mt-1">
                    0
                  </h1>
                  <p className="text-[#6E6E6E]">Total Orders</p>
                </div>
                <div className="bg-[#FFFFFF] border-2 shadow-sm w-[273px] p-5 rounded-md">
                  <img src={truck1} alt="" />
                  <h1 className="text-[#333333] text-[22px] font-bold mt-1">
                    0
                  </h1>
                  <p className="text-[#6E6E6E]">Pending Shipment</p>
                </div>
                <div className="bg-[#FFFFFF] border-2 shadow-sm w-[273px] p-5 rounded-md">
                  <img src={timer} alt="" />
                  <h1 className="text-[#333333] text-[22px] font-bold mt-1">
                    0
                  </h1>
                  <p className="text-[#6E6E6E]">Average Deliver Time</p>
                </div>
              </div>
            </div>

            <div className="px-24 mt-32">
              {data && (
                <div className="flex  items-center gap-16">
                  <button
                    onClick={() => setCreateOrderForm(true)}
                    className=" flex bg-[#004324] rounded-[4px] gap-1 p-[10.5px]  text-white "
                  >
                    <img src="/public/plus.svg" alt="" />
                    Create Order
                  </button>
                  <button className=" flex bg-white rounded-[4px] border border-[#8ED06C] gap-1 p-[10.5px]  text-[#8ED06C] ">
                    <img src="/public/export.svg" alt="" />
                    Export CSV
                  </button>
                </div>
              )}
              {data && data.length === 0 && (
                <>
                  <div>
                    <img
                      src={shoppingcartremove}
                      alt=""
                      className="flex justify-center mx-auto"
                    />
                    <h1 className="text-[24px] font-extrabold text-center">
                      You Have No orders Yet
                    </h1>
                    <p className="text-[#6E6E6E] font-bold text-center">
                      You’ll get notified when you receive your first order
                    </p>
                  </div>

                  <div className="flex justify-center mt-3">
                    <button className="text-[#ffffff] bg-[#004324] p-3 font-bold rounded-md">
                      Check Your Customers
                    </button>
                  </div>
                </>
              )}
            </div>

            <div>
              <OrdersTable data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
