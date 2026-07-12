import { ArrowUpRightFromSquare, Calendar, MapPin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  console.log(destination);
  return (
    <div className="">
      <Image
        className="rounded-xl mb-1.5"
        src={destination.imageUrl}
        alt={destination.destinationName}
        width={400}
        height={400}
      />
      <p className="flex">
        <span className="flex items-center gap-1">
          <MapPin></MapPin> {destination.country}
        </span>
      </p>
      <h2 className=" text-xl font-bold flex justify-between items-center ">
        <span>{destination.destinationName}</span>
        <span>
          ${destination.price}
          <span className="font-normal ">/Person</span>
        </span>
      </h2>
      {/* <p className=" ">{destination.category}</p> */}
      <p>
        <span className="flex items-center gap-1 font-bold">
          <Calendar />
          {destination.duration}
        </span>
      </p>
      <Link href={`/destinations/${destination._id}`}>
        <Button className="mt-2" view="outlined " size="m">
          <ArrowUpRightFromSquare /> View Details
        </Button>
      </Link>
    </div>
  );
}
