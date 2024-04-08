import { useEffect, useState } from "react";
import Property from "./Property";
import { useLoaderData } from "react-router-dom";
import "../../../Components/Style/Button.css";
import Navbar from "../../Home/Navbar/Navbar";

const Properties = () => {
  const { count } = useLoaderData();

  const [plots, setPlots] = useState([]);
  const [filteredItems, setFilteredItems] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch(
      `https://mi-casa-server.vercel.app/property?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setPlots(data));
  }, [currentPage, itemsPerPage]);

  return (
   <>
   <Navbar></Navbar>
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
        <div className="grid grid-cols-3 gap-10">
          {plots
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
        </div>
        <div className="pagination ">
          <button onClick={handlePreviousPage}>Previous</button>
          {pages.map((page) => (
            <button
              className={currentPage === page ? "selected" : undefined}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </div></>
  );
};

export default Properties;
