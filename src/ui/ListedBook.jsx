import { Link } from "react-router";

export default function ListedBook({ book }) {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="card card-side border border-gray-300 p-5 shadow-sm">
      <figure className="bg-slate-200 rounded-xl py-5 px-20">
        <img
          className="max-w-[120px] object-contain"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl font-extrabold font-playfair ">
          {bookName}
        </h2>
        <p className="text-xl">By : {author}</p>
        <p className="flex gap-2 ">
          <span className="font-bold">Tag</span>
          <span className="tags ">
            {tags.map((tag) => (
              <span
                key={`${bookId}-${tag}`}
                className="badge badge-soft badge-success text-green-600  "
              >
                #{tag}
              </span>
            ))}
          </span>
          <span>Year of Publishing: {yearOfPublishing}</span>
        </p>
        <p className="flex gap-4 border-b border-gray-300 pb-5">
          <span> Publisher: {publisher}</span>
          <span>Page: {totalPages}</span>
        </p>
        <div className="card-actions">
          <button className="btn btn-soft btn-info ">
            Category: {category}
          </button>
          <button className="btn btn-soft btn-warning">Rating: {rating}</button>
          <Link
            to={`/bookdetails/${bookId}`}
            className="btn btn-soft btn-success"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
