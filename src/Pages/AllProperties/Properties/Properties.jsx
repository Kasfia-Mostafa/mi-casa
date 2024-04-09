import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../../../Components/Style/Button.css";
import Property from "./Property";
import Navbar from "../../Home/Navbar/Navbar";
import Pagination from "../../../Components/Pagination/Pagination";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Properties = () => {
  const [plots, setPlots] = useState([]);
  const [filteredItems, setFilteredItems] = useState("");
  const axiosPublic = useAxiosPublic();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  // const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    axiosPublic.get("/property").then((res) => setPlots(res.data));
  }, []);



  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = plots.slice(firstPostIndex, lastPostIndex);

    // const handleChange = (event) => {
  //   setSelectedProperty(event.target.value);
  // };

  // console.log(selectedProperty);

  return (
    <>
      <div className="bg-white pb-16">
        <div className=" h-80">
          <h2 className="text-6xl font-DM text-center pt-10 text-red-800">
            All Properties
          </h2>
          <div className="m-16">
            <form>
              <div className="relative w-3/5 mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border bg-white  border-gray-300 rounded-lg "
                  placeholder="Property name..."
                  required
                  onChange={(event) => {
                    setFilteredItems(event.target.value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-14">
          <div className="grid grid-cols-2 gap-5 my-10">
            {currentPosts
              .filter((plot) => {
                if (filteredItems == "") {
                  return plot;
                } else if (
                  plot.property_title.toLowerCase().includes(filteredItems)
                ) {
                  return plot;
                }
              })
              .map((plot) => (
                <Property key={plot._id} plot={plot}></Property>
              ))}
            <div>
              <Pagination
                totalPosts={plots.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
