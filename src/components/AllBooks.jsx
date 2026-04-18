import { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/src/data/booksData.json").then((res) =>
  res.json(),
);

export default function AllBooks() {
  const books = use(booksPromise);
  //   console.log(books);
  return (
    <>
      <section className="container mx-auto text-center py-10 ">
        <h2 className="text-6xl font-bold ">Books</h2>

        <div className="booklist grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 mt-10 justify-items-center ">
          {books.map((book) => {
            //     console.log(book);
            return <BookCard key={book.bookId} book={book} />;
          })}
        </div>
      </section>
    </>
  );
}
