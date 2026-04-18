import { Link } from "react-router";

export default function BookCard({ book }) {
  return (
    <Link
      to={`/bookdetails/${book.bookId}`}
      className=" single-book w-80 lg:w-full card border border-gray-300  shadow-md rounded-xl"
    >
      <figure className="mt-8 mx-8  bg-slate-100 rounded-xl p-5">
        <img src={book.image} alt={book.title} className=" max-h-[200px]  " />
      </figure>
      <div className="card-body text-left ">
        <div className="tags flex gap-2">
          {book.tags.map((tag) => (
            <div
              key={`${book.bookId}-${tag}`}
              className="badge badge-soft badge-success"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title">{book.title}</h2>
        <p>
          By: {book.author} <br /> {book.year}
        </p>
        <div className="flex justify-between border-t border-dashed border-gray-300 pt-4">
          <span>{book.category}</span>
          <span>
            {book.rating} <span className="text-yellow-500">★</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
