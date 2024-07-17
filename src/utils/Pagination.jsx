import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className={`px-3 py-1 rounded-md ${
          isFirstPage
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-primary hover:bg-primaryDark text-white"
        } ${isFirstPage ? "pointer-events-none" : ""}`}
        onClick={handlePrevClick}
        disabled={isFirstPage}
      >
        <IoIosArrowBack />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-md ${
            currentPage === index + 1
              ? "bg-primary hover:bg-primaryDark text-white"
              : "bg-gray-300 hover:bg-gray-400 text-gray-700"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          <p className="text-center font-semibold">{index + 1}</p>
          
        </button>
      ))}
      <button
        className={`px-3 py-1 rounded-md ${
          isLastPage
            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
            : "bg-primary hover:bg-primaryDark text-white"
        } ${isLastPage ? "pointer-events-none" : ""}`}
        onClick={handleNextClick}
        disabled={isLastPage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
