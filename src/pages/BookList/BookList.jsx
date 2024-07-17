import { getAllBooks } from "../../data/books";
import Container from "../../utils/Container";

const BookList = () => {
  const data = getAllBooks();

  return <Container books={data} />;
}

export default BookList
