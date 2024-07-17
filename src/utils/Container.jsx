import { useState } from "react";

import BookCard from "./BookCard";
import Pagination from "./Pagination";
import FilterBar from "../components/FilterBar";

const Container = ({ books }) => {
  const booksPerPage = 4; // 每頁顯示的書籍數量
  const [currentPage, setCurrentPage] = useState(1); // 當前頁碼

  const [selectedGenre, setSelectedGenre] = useState("All"); // 初始選擇 "All"

  const filteredBooks =
    selectedGenre === "All"
      ? books
      : books.filter((book) => book.genre === selectedGenre);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalBooks = filteredBooks.length;
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  return (
    <div className="relative h-[90vh]">

      {/* 下拉選單 */}
      <FilterBar
        books={books}
        selectedGenre={selectedGenre}
        onGenreChange={handleGenreChange}
      />

      {/* 書籍顯示 */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      {/* 換頁 */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 py-3">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Container;
