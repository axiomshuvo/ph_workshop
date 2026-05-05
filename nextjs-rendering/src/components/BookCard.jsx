import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
  const { id, title, author, price, image } = book;

  return (
    <div>
      <div className="card bg-emerald-900 card-sm shadow-sm text-center">
        <Image
          src={image}
          alt={title}
          width={300}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-purple-500">by {author}</p>
          <p className="text-lg font-semibold">${price.toFixed(2)}</p>
          <Link href={`/books/${id}`} className="btn btn-info mt-2">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
