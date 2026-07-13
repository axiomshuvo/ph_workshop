import { DeleteDestination } from "@/components/DeleteDestination";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";

export default async function SingleDestinationDetails({ params }) {
  const { id } = await params;
  console.log("SingleDestinationDetails id:", id);

  const res = await fetch(`http://localhost:5001/destinations/${id}`);
  const destination = await res.json();
  //console.log("Fetched Destination:", destination);

  if (!destination) {
    return <div>Destination not found</div>;
  }
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-end gap-3 items-center py-4">
        <EditModal destination={destination} />
        <DeleteDestination destination={destination} />
      </div>
      <div className=" py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          className="mb-3 rounded-lg"
          src={destination.imageUrl}
          alt={destination.destinationName}
          width={600}
          height={600}
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {destination.destinationName}
          </h2>
          <p className="">{destination.description}</p>
          <p className="">Country: {destination.country}</p>
          <p>Category: {destination.category}</p>
          <p>Price: ${destination.price}</p>
          <p>Duration: {destination.duration}</p>
          <p>Departure Date: {destination.departureDate}</p>
        </div>
      </div>
    </div>
  );
}
