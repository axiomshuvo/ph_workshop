import DestinationCard from "@/components/DestinationCard";

export default async function Destinations() {
  const res = await fetch("http://localhost:5001/destinations");
  const destinations = await res.json();

  // console.log("Fetched Destinations:", destinations);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-6xl text-center font-semibold mb-5">
        All Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <DestinationCard destination={destination} key={destination._id} />
        ))}
      </div>
    </div>
  );
}
