import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/Wanderlast.png";
export default function Navbar() {
  const NavLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/destinations">Destinations</Link>
      </li>
      <li>
        <Link href="/my-bookings">My Bookings</Link>
      </li>
      <li>
        <Link href="/add-destination">Add Destination</Link>
      </li>
    </>
  );

  const routeLinks = [
    { name: "Profile", path: "/Profile" },
    { name: "Login", path: "/Login" },
    { name: "Signup", path: "/Signup" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <ul className="flex gap-3">{NavLinks}</ul>
        <div>
          <Image src={logo} alt="Logo" width={200} height={200} />
        </div>

        <ul className="flex gap-3">
          {routeLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
