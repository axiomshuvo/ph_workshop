import { Outlet } from "react-router";
import Header from "./route/Header";

export default function Root() {
  return (
    <div>
      <h1>This is Root </h1>
      <Header />
      <Outlet />
    </div>
  );
}
