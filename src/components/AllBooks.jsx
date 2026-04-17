import { use } from "react";

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

        <div className="booklist grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-10">
          {books.map((book) => {
            console.log(book);
            return (
              <div
                key={book.bookId}
                className=" single-book card border border-gray-300  shadow-md rounded-xl"
              >
                <figure className="p-8 ">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body text-left ">
                  <div className="tags flex gap-2">
                    {book.tags.map((tag) => (
                      <div className="badge badge-soft badge-success">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <h2 className="card-title">{book.title}</h2>
                  <p>
                    by: {book.author} <br /> {book.year}
                  </p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
