const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
  //   console.log(allReadList, "readlist from local DB");
  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addReadListToLocalDB = (book) => {
  const allReadList = getAllReadListFromLocalDB();
  console.log(allReadList, "readlist from local DB in add function");

  const isAlreadyExit = allReadList.find((bk) => bk.bookId === book.bookId);
  if (isAlreadyExit) {
    return;
  } else {
    // data local storage e add korte chai

    allReadList.push(book);
    localStorage.setItem("readList", JSON.stringify(allReadList));
  }
};

const getAlWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishList");
  if (allWishList) return JSON.parse(allWishList);
  return [];
};

const addWishListToLocalDB = (book) => {
  const allWishList = getAlWishListFromLocalDB();

  const isAlreadyExit = allWishList.find((bk) => bk.bookId === book.bookId);
  if (isAlreadyExit) {
    return;
  } else {
    // data local storage e add korte chai

    allWishList.push(book);
    localStorage.setItem("wishList", JSON.stringify(allWishList));
  }
};

export {
  addReadListToLocalDB,
  addWishListToLocalDB,
  getAllReadListFromLocalDB,
  getAlWishListFromLocalDB,
};
