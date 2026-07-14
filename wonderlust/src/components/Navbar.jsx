"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import logo from "../../public/assets/Wanderlast.png";
export default function Navbar() {
  const {
    data: session,
    // isPending, //loading state
    // error, //error object
    // refetch, //refetch the session
  } = authClient.useSession();

  console.log("Session Data:", session);

  const signOut = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      toast.warning("Successfully signed out!");
      redirect("/"); // Redirect to login page after sign out
    }
  };

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
    // conditionally render Logout if session exists, else render Login and Signup
    session
      ? [
          {
            name: session.user.name || "Profile",
            path: "/profile",
            imgurl: session.user.image,
          },
          { name: "Logout", path: "/logout" },
        ]
      : [
          { name: "Login", path: "/login" },
          { name: "Signup", path: "/signup" },
        ],
  ].flat(); // flatten the array to avoid nested arrays

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <ul className="flex gap-3">{NavLinks}</ul>
        <div>
          <Image src={logo} alt="Logo" width={200} height={200} />
        </div>

        <ul className="flex gap-3">
          {routeLinks.map((link) => (
            <li key={link.name} className="flex items-center gap-2">
              {/* Display user avatar if session exists */}
              {link?.imgurl && (
                <Avatar>
                  <Avatar.Image
                    alt={session.user.name}
                    priority
                    src={link.imgurl}
                  />
                  <Avatar.Fallback>
                    {session.user.name.slice(0, 2).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>
              )}
              {link.name === "Logout" ? (
                <Link href="#" onClick={signOut}>
                  {link.name}
                </Link>
              ) : (
                <Link href={link.path}>{link.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
