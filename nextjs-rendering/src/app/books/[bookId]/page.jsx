import Image from "next/image";

export async function generateMetadata({ params }) {
  const { bookId } = await params;
  const book = await fetch(`http://localhost:3001/books/${bookId}`).then(
    (res) => res.json(),
  );
  return {
    title: book.title,
    description: `Details about the book "${book.title}" by ${book.author}.`,
  };
}

// export const generateStaticParams = async () => {
//   const res = await fetch("http://localhost:3001/books");
//   const books = await res.json();
//   return books.slice(0, 3).map((book) => ({ bookId: book.id })); // [{ bookId: 1 }, { bookId: 2 }, ...]
// };

export default async function BookDetails({ params }) {
  const { bookId } = await params;
  // wait 1 second before loading data
  //   await new Promise((resolve) => setTimeout(resolve, 200));

  console.log("Fetching details for book ID:", bookId);
  const res = await fetch(`http://localhost:3001/books/${bookId}`);
  const book = await res.json();

  const {
    id,
    title,
    author,
    price,
    genre,
    rating,
    image,
    description,
    publisher,
  } = book;

  console.log("Book Details:", book);

  return (
    <div className="container mx-auto p-4 text-center space-y-5">
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="w-full max-h-96 object-contain mb-4"
      />
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg">by {author}</p>
      <p className="text-xl font-semibold">${price.toFixed(2)}</p>

      <p className="text-sm text-gray-500">Rating: {rating}/5</p>
      <p className="text-sm text-gray-500 mt-1">Genre: {genre}</p>
      <p className="text-sm text-gray-500">Publisher: {publisher}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}
