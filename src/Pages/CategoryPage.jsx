import { useFetchCategories } from "../datahooks/products/productshooks";
import { arrowleft } from "../assets";
import AddProduct1 from "../Components/PopupModals/AddProduct1";
import { useParams } from "react-router-dom";
import { useSidebarStore } from "../ZustandStores/sidebarStore";
import DashboardIntro from "../Components/Dashboard/DashboardIntro";
import { useProductStore } from "@/ZustandStores/transferStore";
const CategoryPage = () => {
  const { categories } = useFetchCategories();
  const { id } = useParams();
  const { isCollapsed } = useSidebarStore();
  const category = categories && categories[id];
  //capitalize the title of each store name pls do not touch abeg!
  const storeTitle =
    category?.name?.split("")[0].toUpperCase() + category?.name.slice(1);
  const{isPopupOpen, closePopup, openPopup}=useProductStore()
  return (
    <>
      <div
        className={`${
          isCollapsed ? "flex-grow lg:ml-20 " : "flex-grow lg:ml-56 "
        }  overflow-x-hidden `}
      >
        <section
          className={`mt-[73px] mb-6 ${
            isCollapsed ? " max-w-[1100px]" : " max-w-[950px]"
          }  mx-auto  `}
        >
           {isPopupOpen?   <AddProduct1  isPopupOpen={isPopupOpen}
                      openPopup={openPopup}
                      closePopup={closePopup}/>: 
          <div className="execptAddproduct">
            <article className="flex flex-col lg:flex-row gap-2 lg:justify-between lg:items-center">
              <DashboardIntro introText={storeTitle} />
              <AddProduct1  isPopupOpen={isPopupOpen}
                      openPopup={openPopup}
                      closePopup={closePopup}/>
            </article>
            <div className="bg-white border shadow-lg rounded-md p-4 mt-10">
              <table className="w-full border-separate border-spacing-y-5">
                <thead>
                  <tr className="text-left bg-[#EAF4E2]">
                    <th className=" p-2 shadow-lg uppercase">product id </th>
                    <th className=" p-2 shadow-lg uppercase">product name</th>
                    <th className=" p-2 shadow-lg uppercase">category</th>
                    <th className=" p-2 shadow-lg uppercase">price</th>
                    <th className=" p-2 shadow-lg uppercase">Unit Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    //in the above array look for a particular category based on its id and map thru it
                    categories &&
                      categories?.[id].products.map((item, index) => {
                        return (
                          <tr className="mt-4 bg-white shadow-md" key={item.id}>
                            <td className="bg-white p-2 text-[#6e6e6e] font-semibold capitalize ">
                              {String(index + 1).padStart(4, 0)}
                            </td>
                            <td className="bg-white p-2 text-[#6e6e6e] font-semibold  capitalize">
                              {item.name}
                            </td>
                            <td className="bg-white p-2 text-[#6e6e6e] font-semibold capitalize">
                              {category?.name}
                            </td>
                            <td className="bg-white p-2 text-[#6e6e6e] font-semibold  ">
                              {item.price}
                            </td>
                            <td className="bg-white p-2   text-[#6e6e6e]  font-semibold capitalize">
                              {item.stock}
                            </td>
                          </tr>
                        );
                      })
                  }
                </tbody>
              </table>
            </div>
          </div>}
        </section>
      </div>
    </>
  );
};

export default CategoryPage;
