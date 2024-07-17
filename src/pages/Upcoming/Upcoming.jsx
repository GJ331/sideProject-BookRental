import { getAllBooks } from "../../data/books";
import Container from "../../utils/Container";

const Upcoming = () => {
  const data = getAllBooks();
  const upcomingBooks = data.filter(book => book?.upcoming === true);

  return <Container books={upcomingBooks} />;
}

export default Upcoming
