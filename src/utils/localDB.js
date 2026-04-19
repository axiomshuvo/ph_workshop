const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
  //   console.log(allReadList, "readlist from local DB");
  if (allReadList) return JSON.parse(allReadList);
  return [];
};

const addReadListToLocalDB = (book) => {
  const allReadList = getAllReadListFromLocalDB();
  console.log(allReadList, "readlist from local DB in add function");

  const isAlreadyExit = allReadList.find((bk) => bk.bookId === book.BookId);
  if (isAlreadyExit) {
    return;
  } else {
    allReadList.push(book);
    localStorage.setItem("readList", JSON.stringify(allReadList));
  }
};

export { addReadListToLocalDB, getAllReadListFromLocalDB };
