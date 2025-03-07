/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDeleteProduct } from "../../datahooks/products/productshooks";

const DeleteProduct = ({ product }) => {
  // State to control the main popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // State to control the final confirmation visibility
  const [isFinalConfirmationOpen, setIsFinalConfirmationOpen] = useState(false);

  // State to control whether the fade-out animation should play
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Function to toggle the main popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const { deleteProduct, deletingProduct } = useDeleteProduct(() => {
    setIsPopupOpen(false);
    setIsFinalConfirmationOpen(true);

    // Automatically start the fade-out after a short delay
    setTimeout(() => {
      setIsFadingOut(true);
    }, 100);

    // Close the final confirmation popup after the fade-out completes (300ms)
    setTimeout(() => {
      setIsFinalConfirmationOpen(false);
      setIsFadingOut(false);
    }, 500);
  });
  // Function to handle the "Yes" button click and delete product
  const handleYesClick = async () => {
    try {
      deleteProduct(product);
      // Send a delete request to the API
      // If successful, close the main popup and show the final confirmation
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle error (e.g., show a message to the user)
      alert("Failed to delete the product. Please try again.");
    }
  };
  return (
    <>
      {/* Button to trigger the popup */}
      <button
        onClick={togglePopup}
        className="hover:scale-110 duration-300 hover:border-lightBlack border-[#ffffff] border-b-[2px] transition underline-offset-2 decoration-[2px] inline-block hover:-translate-x-1"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 7.33398L25.1737 20.7008C24.9625 24.1159 24.8571 25.8235 24.0011 27.0512C23.5777 27.6581 23.0329 28.1704 22.4009 28.5553C21.1228 29.334 19.412 29.334 15.9903 29.334C12.5642 29.334 10.8511 29.334 9.57207 28.5539C8.93973 28.1683 8.39467 27.6551 7.97157 27.0471C7.11584 25.8175 7.0126 24.1075 6.80615 20.6876L6 7.33398"
            stroke="#6e6e6e"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 15.6465H20"
            stroke="#6e6e6e"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14 20.873H18"
            stroke="#6e6e6e"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 7.33268H28M21.4073 7.33268L20.4972 5.45499C19.8925 4.2077 19.5901 3.58404 19.0687 3.1951C18.9531 3.10882 18.8305 3.03207 18.7024 2.96562C18.1249 2.66602 17.4319 2.66602 16.0457 2.66602C14.6248 2.66602 13.9144 2.66602 13.3273 2.97818C13.1972 3.04736 13.0731 3.12722 12.9561 3.21691C12.4286 3.62162 12.1339 4.26808 11.5446 5.56103L10.737 7.33268"
            stroke="#6e6e6e"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Are You Sure You Want To Delete This Product ?
              </h1>
            </div>

            <div className="flex items-center justify-center gap-28">
              {/* Yes Button */}
              <button
                className=" disabled:bg-opacity-25 disabled:cursor-not-allowed"
                disabled={deletingProduct}
                onClick={handleYesClick}
                type="button"
              >
                <div className=" flex mt-10">
                  <h1 className="text-[#333333] flex font-bold gap-1 items-center hover:border-[#ffffff] hover:bg-[#E2E8F0] transition ease-out duration-500 border-[#004324] border-2 p-2 px-6 rounded-md">
                    {deletingProduct ? "Deleting" : "Yes"}
                  </h1>
                </div>
              </button>

              {/* No Button */}
              <button onClick={togglePopup} type="button">
                <div className=" flex mt-10">
                  <h1 className="text-[#ffffff] hover:text-[#333333] transition ease-out duration-700 flex font-bold gap-1 items-center border-[#004324] hover:bg-[#E2E8F0] bg-[#004324] border-2 p-2 px-6 rounded-md">
                    No
                  </h1>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Confirmation Modal with Fade-Out Animation */}
      {isFinalConfirmationOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 
          ${
            isFadingOut
              ? "opacity-0 transition-opacity duration-500"
              : "opacity-100 transition-opacity duration-500"
          }`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[200px] w-full relative">
            <div>
              <h1 className="text-[16px] font-bold text-[#333333]">
                Product Deleted
              </h1>
            </div>
            <div className="flex justify-center mt-5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.5 9.16602L31.4672 25.8745C31.2032 30.1433 31.0713 32.2778 30.0013 33.8125C29.4722 34.5712 28.7912 35.2115 28.0012 35.6927C26.4035 36.666 24.265 36.666 19.9878 36.666C15.7052 36.666 13.5638 36.666 11.9651 35.6908C11.1747 35.2088 10.4933 34.5673 9.96447 33.8073C8.8948 32.2703 8.76575 30.1328 8.50768 25.858L7.5 9.16602"
                  stroke="#004324"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15 19.5586H25"
                  stroke="#004324"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M17.5 26.0898H22.5"
                  stroke="#004324"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M5 9.16732H35M26.7592 9.16732L25.6215 6.8202C24.8657 5.26108 24.4877 4.48152 23.8358 3.99533C23.6913 3.88748 23.5382 3.79155 23.378 3.70848C22.6562 3.33398 21.7898 3.33398 20.0572 3.33398C18.281 3.33398 17.393 3.33398 16.6591 3.72418C16.4965 3.81067 16.3413 3.91048 16.1952 4.0226C15.5357 4.52848 15.1674 5.33657 14.4307 6.95275L13.4212 9.16732"
                  stroke="#004324"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteProduct;
