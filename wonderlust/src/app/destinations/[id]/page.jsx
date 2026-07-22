import BookingCard from "@/components/BookingCard";
import { DeleteDestination } from "@/components/DeleteDestination";
import { EditModal } from "@/components/EditModal";
import { Card } from "@heroui/react";
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
          <div className="flex justify-between my-10 text-lg">
            <div className="italic">
              <p className="">
                Country:
                <span className="not-italic font-semibold">
                  {destination.country}
                </span>
              </p>
              <p>
                Category:{" "}
                <span className="not-italic font-semibold">
                  {destination.category}
                </span>
              </p>
              <p>
                Duration:{" "}
                <span className="not-italic font-semibold">
                  {destination.duration}
                </span>
              </p>
              <p>
                Departure Date:{" "}
                <span className="not-italic font-semibold">
                  {destination.departureDate}
                </span>
              </p>
            </div>

            <Card className="w-1/3 text-center p-4">
              <BookingCard destination={destination} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
