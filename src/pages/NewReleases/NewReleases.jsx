import { getAllBooks } from "../../data/books";
import Container from "../../utils/Container";

const NewReleases = () => {
  const data = getAllBooks();
  const today = new Date();

  // Filter books by date
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeekAgo = today.getTime() - (7 * oneDay); 

  const latestBooks = data.filter(book => new Date(book.createdAt).getTime() >= oneWeekAgo);

  return <Container books={latestBooks} />;
}

export default NewReleases
