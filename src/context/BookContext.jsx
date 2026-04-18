import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

export default function BookProvider({ children }) {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    //check if the book is already marked as read, if yes, show a message and return
    // const isExistInWishList = wishList.find((book) => {
    //   return book.bookId === currentBook.bookId;
    // });

    // if (isExistInWishList) {
    //   toast.warning(
    //     `You have already added this ${currentBook.bookName} to your wish list. You can't mark it as read.`,
    //   );
    //   return;
    // }
    // Logic to mark the book as read
    // console.log(`Book with ID ${currentBook} marked as read.`);

    //  logic ---
    const isExistBook = storeBooks.find((book) => {
      // console.log(book.bookId, currentBook.bookId);
      return book.bookId === currentBook.bookId;
    });
    console.log(storeBooks);

    if (isExistBook) {
      //if the book id is already in the collection, do nothing or show a message
      toast.warning(
        `You have already marked this ${currentBook.bookName} as read.`,
      );
      return;
    } else {
      // if the book id is not in the collection, add it and show a success message
      setStoreBooks([...storeBooks, currentBook]);
      toast.success(`${currentBook.bookName} marked as read successfully!`);
    }

    //  use localstoage for this project
    // array format or collection of read book ids
  };

  const handleWishList = (currentBook) => {
    const isExistInReadBooks = storeBooks.find((book) => {
      return book.bookId === currentBook.bookId;
    });

    if (isExistInReadBooks) {
      toast.warning(
        `You have already marked this ${currentBook.bookName} as read. You can't add it to your wish list.`,
      );
      return;
    }

    const isExistBook = storeBooks.find((book) => {
      return book.bookId === currentBook.bookId;
    });
    console.log(storeBooks);

    if (isExistBook) {
      toast.warning(
        `You have already added this ${currentBook.bookName} to your wish list.`,
      );
      return;
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} added to wish list successfully!`);
    }
  };

  const data = {
    storeBooks,
    handleMarkAsRead,
    setStoreBooks,
    wishList,
    handleWishList,
    setWishList,
  };

  return (
    <>
      <BookContext.Provider value={data}>{children}</BookContext.Provider>
    </>
  );
}
