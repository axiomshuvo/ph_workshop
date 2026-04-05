import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <div>This is Header</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/customers">Customers</NavLink>
        <NavLink to="/spa">SPA</NavLink>
        <NavLink to="/app">App</NavLink>
        <NavLink to="/consumers">Consumers</NavLink>
      </nav>
    </>
  );
}
