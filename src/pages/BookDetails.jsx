import { useLoaderData, useParams } from "react-router";

export default function BookDetails() {
  const { bookId } = useParams();
  const books = useLoaderData();

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = books.find((book) => book.bookId === parseInt(bookId));

  console.log({
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  });

  return (
    <>
      <div className=" container mx-auto card lg:card-side ">
        <figure className=" m-8  bg-slate-100 rounded-xl p-15 ">
          <img
            className="max-w-[350px] object-contain"
            src={image}
            alt={bookName}
          />
        </figure>

        <div className="card-body space-y-5  lg:w-2/5 ">
          <h2 className="card-title text-4xl font-extrabold font-playfair ">
            {bookName}
          </h2>
          <p className="text-xl font-semibold ">By: {author}</p>
          <p className="text-xl font-semibold border-t border-b border-gray-300 py-2">
            {category}
          </p>
          <p className=" ">
            <span className="font-semibold">Review:</span> {review}
          </p>
          <p className="flex gap-2 border-b border-gray-300 pb-5">
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
          </p>
          <dl className="grid grid-cols-[auto_auto_1fr] gap-x-2 gap-y-2 text-sm">
            <dt className="font-semibold">Number of Pages</dt>
            <span>:</span>
            <dd>{totalPages}</dd>

            <dt className="font-semibold">Publisher</dt>
            <span>:</span>
            <dd>{publisher}</dd>

            <dt className="font-semibold">Year of Publishing</dt>
            <span>:</span>
            <dd>{yearOfPublishing}</dd>

            <dt className="font-semibold">Rating</dt>
            <span>:</span>
            <dd>
              {rating} <span className="text-yellow-500">★</span>
            </dd>
          </dl>
          <div className="card-actions ">
            <button className="btn btn-outline ">Read</button>
            <button className="btn btn-info text-white ">Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}
