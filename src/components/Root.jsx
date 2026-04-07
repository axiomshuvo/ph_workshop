import { Outlet, useNavigation } from "react-router";
import Header from "./route/Header";

export default function Root() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <h1>This is Root </h1>
      <Header />
      {isNavigating && <p>Loading...</p>}
      <Outlet />
    </div>
  );
}
