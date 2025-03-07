/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { toast } from "sonner";

const CustomProductSizeSelector = ({setProductDetails, productDetails}) => {
  const modalRef = useRef(null);
  const createSizeTabRef = useRef(null); 
  const [size, setSize] = useState("");
  const [unit, setUnit] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const [openCreateSizeTab, SetOpenCreateSizeTab] = useState(false);
// console.log(size)
  const handleSizeChange = (event) => {
    setSize(event.target.value);
    setProductDetails({
        ...productDetails,
        size:event.target.value,
      });
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
   
    setProductDetails({
      ...productDetails,
      unit: event.target.value,
    });
    setOpenSelect(false);
    SetOpenCreateSizeTab(false);
  };
  const [siUnit, setSiUnit] = useState({
    value: null,
    text: "",
  });
  const [sizes, setSizes] = useState([
    { value: null, text: "Select Unit" },
    { value: "KG", text: "Kilogramme" },
    { value: "G", text: "Gramme" },
  ]);

  const addUnit = () => {
    // More robust validation
    if (!siUnit.text.trim()) {
      toast.error("Placeholder text is required");
      return;
    }

    if (!siUnit.value || !siUnit.value.trim()) {
      toast.error("Unit value is required");
      return;
    }

    // Check for duplicate units
    const isDuplicate = sizes.some(
      (existingSize) =>
        existingSize.value === siUnit.value || existingSize.text === siUnit.text
    );

    if (isDuplicate) {
      toast.error("This unit already exists");
      return;
    }

    setSizes([...sizes, siUnit]);
    setSiUnit({
      text: "",
      value: "",
    });
    SetOpenCreateSizeTab(false);
    toast.success("New Size Value Added");
  };
  const handleCustomSiUnitChange = (e) => {
    setSiUnit({
      ...siUnit,
      text: e.target.value,
    });
  };
  const handleCustomSiUnitValueChange = (e) => {
    setSiUnit({
      ...siUnit,
      value: e.target.value,
    });
  };
  useEffect(() => {
    // Function to close modals when clicking outside
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenSelect(false);  // Close the select modal
      }

      if (createSizeTabRef.current && !createSizeTabRef.current.contains(event.target)) {
        SetOpenCreateSizeTab(false); // Close the create size tab modal
      }
    };

    // Add event listener on component mount
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <label className="mt-2 font-bold text-lightBlack">Enter Product Weight and SI Unit</label>
      <div className="flex flex-col lg:flex-row gap-3 mb-3">
        <input
          type="text"
          className="rounded-lg border-[#6e6e6e] bg-[#F5F5F5] border text-gray-700 sm:text-sm p-3"
          placeholder="Enter Weight"
          value={size}
          onChange={handleSizeChange}
        />
        <div
          className="rounded-lg relative w-full "
          onClick={() => {
            setOpenSelect(!openSelect);
            SetOpenCreateSizeTab(false);
          }}
        >
          <input
            className="rounded-lg cursor-pointer relative w-full border-[#6e6e6e] bg-[#F5F5F5] border text-gray-700 sm:text-sm p-3"
            readOnly
            value={unit || 'Select Unit'}
          />
          {openSelect && (
            <div
            ref={modalRef}
              className="flex  z-[100] w-full py-5  bg-white  absolute rounded-lg top-[105%] border-zinc-100 border  left-0 right-0 h-fit  flex-col  divide-y-2 divide-zinc-100"
            >
              <div className=" max-h-[150px] overflow-y-auto">
                {sizes.map((size) => (
                  <>
                    <div
                      className=" hover:text-zinc-800 cursor-pointer hover:bg-zinc-100 px-5 p-2 "
                      key={size.value}
                      onClick={(e) => {
                         handleUnitChange({ target: { value: size.value } });
                      }}
                    >
                      {size.text}
                    </div>
                  </>
                ))}
              </div>
              <div className="relative px-3">
                <button
                  type="button"
                  onClick={(e) => {
                    SetOpenCreateSizeTab(true)
                      e.stopPropagation();
                  }}
                  className="  rounded-md mt-4 bg-green text-white  text-nowrap cursor-pointer  px-5 p-2"
                >
                  Create New Si Unit{" "}
                </button>
                {openCreateSizeTab && (
                  <div   ref={createSizeTabRef} 
                  onClick={(e) => e.stopPropagation()} className=" gap-3 flex-col absolute bg-white border-zinc-100 shadow shadow-zinc-200 p-2 border flex items-center space-x-3 pl-2 left-[110%]  top-[-200%] ">
                    <div>
                      <input
                        type="text"
                        className="rounded-lg mb-3 border-[#6e6e6e] bg-[#F5F5F5] border text-gray-700 sm:text-sm p-3"
                        placeholder="Enter Custom Si Unit Text "
                        value={siUnit.text}
                        onChange={(e) => handleCustomSiUnitChange(e)}
                      />
                      <input
                        type="text"
                        value={siUnit.value}
                        className="rounded-lg border-[#6e6e6e] bg-[#F5F5F5] border text-gray-700 sm:text-sm p-3"
                        placeholder="Enter Custom Si Unit Value"
                        onChange={(e) => handleCustomSiUnitValueChange(e)}
                      />
                    </div>

                    <button
                      onClick={addUnit}
                      type="button"
                      className=" bg-green w-full  px-3 py-3 rounded-lg text-white"
                    >
                      Add SiUnit
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomProductSizeSelector;
