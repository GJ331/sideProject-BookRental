import { getAllBooks } from "../../data/books";
import Container from "../../utils/Container";

const Trending = () => {
  const data = getAllBooks();
  const trendingBooks = data.sort((a, b) => b.rating - a.rating);

  return <Container books={trendingBooks} />
}

export default Trending
