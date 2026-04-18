import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function Books() {
  const { storeBooks } = useContext(BookContext);

  console.log(storeBooks);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-2xl py-5 bg-slate-200 rounded-xl font-bold font-playfair ">
          Books List{" "}
        </h1>
        {storeBooks.map((book) => (
          <div key={book.bookId}>
            <h2>{book.bookName}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </>
  );
}
