import { useState } from "react";

import BookCard from "./BookCard";

import Pagination from "./Pagination";

const Container = ({ books }) => {
  const booksPerPage = 4; // 每頁顯示的書籍數量
  const [currentPage, setCurrentPage] = useState(1); // 當前頁碼

  // 計算書籍的起始索引和結束索引
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // 計算總頁數
  const totalBooks = books.length;
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  // 換頁函數
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative h-[90vh]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      {/* 換頁數的工具 */}
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
