import BookingDeleteAlert from "@/components/BookingDeleteAlert";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

export default async function MyBookings({}) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log("Session Data:", session);

  const req = await fetch(
    `http://localhost:5001/bookings/${session?.user.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data = await req.json();

  // console.log(data);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8">MyBookings</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((booking) => {
          const {
            _id,
            destinationName,
            country,
            price,
            category,
            duration,
            imageUrl,
          } = booking;
          console.log("Booking Data:", booking);

          return (
            <Card key={_id} className="  space-y-1">
              <Image
                alt="Indie Hackers community"
                className="pointer-events-none aspect-square  rounded-2xl object-cover select-none"
                loading="lazy"
                width={400}
                height={400}
                src={imageUrl}
              />
              <Card.Header>
                <Card.Title className="text-2xl font-bold">
                  {destinationName}
                </Card.Title>
                <Card.Description>
                  {country} - {category} - {duration} days - ${price}
                </Card.Description>
              </Card.Header>
              <Card.Footer className="flex justify-end  ">
                <BookingDeleteAlert bookingId={_id} />
              </Card.Footer>
            </Card>
          );
        })}
        {data.length === 0 && <p>No bookings found.</p>}
      </div>
    </div>
  );
}
