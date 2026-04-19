import { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BookContext } from "../context/BookContext";
import ListedBook from "../ui/ListedBook";

export default function Books() {
  const { storeBooks, wishList } = useContext(BookContext);
  // console.log(storeBooks);

  const [sortingType, setSortingType] = useState("");
  const [sortedStoreBooks, setSortedStoreBooks] = useState([]);
  const [sortedWishList, setSortedWishList] = useState([]);

  useEffect(() => {
    const readBooklist = [...storeBooks];
    const wishBooklist = [...wishList];

    if (sortingType === "pages") {
      readBooklist.sort((a, b) => a.totalPages - b.totalPages);
      wishBooklist.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === "rating") {
      readBooklist.sort((a, b) => b.rating - a.rating);
      wishBooklist.sort((a, b) => b.rating - a.rating);
    }
    setSortedStoreBooks(readBooklist);
    setSortedWishList(wishBooklist);
  }, [sortingType, storeBooks, wishList]);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-2xl py-8 bg-slate-100 rounded-xl font-bold font-playfair mb-8 ">
          Books List
        </h1>

        <div className="flex justify-center">
          <div className="dropdown dropdown-bottom ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-info btn-wide m-1"
            >
              Sort By {sortingType} ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setSortingType("pages")}>
                <a>Pages</a>
              </li>
              <li onClick={() => setSortingType("rating")}>
                <a>Rating</a>
              </li>
            </ul>
          </div>
        </div>

        <Tabs>
          <TabList>
            <Tab>
              <span className="font-playfair">Read List</span>
            </Tab>
            <Tab>
              <span className="font-playfair">Wish List</span>
            </Tab>
          </TabList>

          <TabPanel className="mt-8 space-y-8">
            {sortedStoreBooks.length === 0 ? (
              <p className="text-center text-2xl font-playfair py-20 bg-slate-200 rounded-xl font-semibold mt-10">
                No books marked as read yet.
              </p>
            ) : (
              sortedStoreBooks.map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))
            )}
          </TabPanel>

          <TabPanel>
            {sortedWishList.length === 0 ? (
              <p className="text-center text-2xl font-playfair py-20 bg-slate-200 rounded-xl font-semibold mt-10">
                No books in the wish list yet.
              </p>
            ) : (
              sortedWishList.map((book) => (
                <ListedBook key={book.bookId} book={book} />
              ))
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
