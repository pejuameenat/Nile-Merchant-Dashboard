/* eslint-disable react/prop-types */
import { download, preference1 } from "../../assets";
import EditProduct from "../PopupModals/EditProduct";
import DeleteProduct from "../PopupModals/DeleteProduct";
import Skeleton from "react-loading-skeleton";
import Pagination from "../Pagination/Pagination";
import usePagination from "../Pagination/PaginationHook";
import { useSidebarStore } from "../../ZustandStores/sidebarStore";
// code start
const ProductTable = ({ data, isFetching, isError }) => {
  const itemsPerPage = 10;
  const { pageCount, currentItems, handlePageChange } = usePagination(
    data,
    itemsPerPage
  );
  const { isCollapsed } = useSidebarStore();
  console.log(data);
  return (
    <>
      {/* Table */}
      {data?.length > 0 ? (
        <div
          className={`${
            isCollapsed ? "max-w-[1000px]" : "max-w-[800px]"
          } mx-auto  `}
        >
          {isFetching ? (
            <div className="bg-[#ffffff] w-full shadow-md">
              <Skeleton className=" w-full h-10" />
              <Skeleton className=" w-full  h-10" />
              <Skeleton className=" w-full h-10" />
            </div>
          ) : isError ? (
            "An error occurred"
          ) : (
            <div className=" overflow-x-scroll lg:overflow-auto">
              <table className=" w-full border-separate border-spacing-y-5">
                <thead>
                  <tr className="text-left bg-[#EAF4E2] shadow-lg">
                    <th className="lg:p-2 text-center">Product ID</th>
                    <th className="lg:p-2  text-center">Product Name</th>
                    <th className="lg:p-2  text-center">Category</th>
                    <th className="lg:p-2  text-center">Price</th>
                    <th className="lg:p-2  text-center">Unit Sold</th>
                    <th className="lg:p-2 text-center">Stock Level</th>
                    <th className="lg:p-2 text-center">Actions</th>
                    {/* <th className="px-2 py-3 text-center flex items-center gap-1 justify-center">
                  Bulk Action
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 7.33398L25.1737 20.7008C24.9625 24.1159 24.8571 25.8235 24.0011 27.0512C23.5777 27.6581 23.0329 28.1704 22.4009 28.5553C21.1228 29.334 19.412 29.334 15.9903 29.334C12.5642 29.334 10.8511 29.334 9.57207 28.5539C8.93973 28.1683 8.39467 27.6551 7.97157 27.0471C7.11584 25.8175 7.0126 24.1075 6.80615 20.6876L6 7.33398"
                      stroke="#8ED06C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 15.6465H20"
                      stroke="#8ED06C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 20.873H18"
                      stroke="#8ED06C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 7.33268H28M21.4073 7.33268L20.4972 5.45499C19.8925 4.2077 19.5901 3.58404 19.0687 3.1951C18.9531 3.10882 18.8305 3.03207 18.7024 2.96562C18.1249 2.66602 17.4319 2.66602 16.0457 2.66602C14.6248 2.66602 13.9144 2.66602 13.3273 2.97818C13.1972 3.04736 13.0731 3.12722 12.9561 3.21691C12.4286 3.62162 12.1339 4.26808 11.5446 5.56103L10.737 7.33268"
                      stroke="#8ED06C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </th> */}
                  </tr>
                </thead>

                <tbody>
                  {currentItems?.map((product) => (
                    <tr key={product.id} className="bg-[#ffffff] shadow-md">
                      <td className="lg:p-2 px-2 text-center">{product.id}</td>
                      <td className="lg:p-2 px-2 text-center capitalize">
                        {product.name}
                      </td>
                      <td className="lg:p-2 px-2  text-center capitalize">
                        {product.category.name}
                      </td>
                      <td className="lg:p-2 px-2 text-center">
                        {product.price}
                      </td>
                      <td className="lg:p-2 px-2  text-center">
                        {product.unitsSold || 0}
                      </td>
                      <td className="lg:p-2 px-2  text-center">
                        {product.stock}
                      </td>
                      <td className="lg:p-2 px-2 text-center flex items-center gap-1 justify-center ">
                        <EditProduct product={product} />
                        <DeleteProduct product={product} />
                      </td>
                      {/* <td className="px-2 py-3 text-center">
                    <input
                      type="checkbox"
                      id={`product-${product.id}`}
                      name={`product-${product.id}`}
                      className="size-5 rounded-md bg-white shadow-sm"
                    />
                  </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : null}
      {/* pagination */}
      {data?.length > itemsPerPage && (
        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
      )}
    </>
  );
};

export default ProductTable;
