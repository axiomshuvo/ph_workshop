import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/posts">Posts</Link>
    </li>
    <li>
      <Link href="/products">Products</Link>
    </li>
    <li>
      <Link href="/books">Books</Link>
    </li>
    <li>
      <Link href="/tasks">Tasks</Link>
    </li>
  </>
);

export default function Navbar() {
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">Hero UI</p>
          </div>
          <ul className="flex items-center gap-4">{links}</ul>
          <div>
            <ThemeToggle />
          </div>
        </header>
      </nav>
    </div>
  );
}
