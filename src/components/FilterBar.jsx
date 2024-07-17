import { useState, useEffect } from "react";
import Dropdown from "../utils/Dropdown";

const FilterBar = ({ books, selectedGenre, onGenreChange }) => {
  const [genreOptions, setGenreOptions] = useState([]);

  useEffect(() => {
    const genres = [...new Set(books.map((book) => book.genre))];
    const genreOptions = ["All", ...genres.filter((genre) => genre)];
    setGenreOptions(genreOptions);
  }, [books]);

  return (
    <div className="flex justify-end space-x-6 mb-4 z-100">
      <div className="flex justify-between space-x-2 items-center">
        <span>Genre</span>
        <Dropdown
          options={genreOptions}
          onSelect={onGenreChange}
          buttonLabel={selectedGenre ? selectedGenre : "Select Genre"}
        />
      </div>
    </div>
  );
};

export default FilterBar;