import { NavLink } from "react-router";

export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    color: "yellow",
  };
  return (
    <>
      <div>This is Header</div>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <NavLink style={activeStyle} to="/">
          Home
        </NavLink>
        <NavLink style={activeStyle} to="/customers">
          Customers
        </NavLink>
        <NavLink style={activeStyle} to="/spa">
          SPA
        </NavLink>
        <NavLink style={activeStyle} to="/app">
          App
        </NavLink>
        <NavLink style={activeStyle} to="/consumers">
          Consumers
        </NavLink>
        <NavLink style={activeStyle} to="/blog">
          Blog
        </NavLink>
      </nav>
    </>
  );
}
