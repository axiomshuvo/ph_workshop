import ViewChart from "../components/ViewChart";
import { getAlWishListFromLocalDB } from "../utils/localDB";

const bookData = getAlWishListFromLocalDB();

console.log(bookData);

export default function PagesToRead() {
  return (
    <>
      <ViewChart viewData={bookData} />
    </>
  );
}
