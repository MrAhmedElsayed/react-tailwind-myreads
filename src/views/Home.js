import React from "react";
import Hero from "../components/Hero.js";
import Shelf from "../components/Shelf";
import FabFixedBtn from "../components/FabFixedBtn";
import { getAll } from "../services/BooksAPI";
import { useEffect, useState } from "react";

// https://medium.com/bb-tutorials-and-thoughts/react-how-to-load-settings-data-from-the-server-before-initializing-an-app-515c25ee1f43

const HomeView = () => {
  const [currentlyReadingShelf, setCurrentlyReadingShelf] = useState([]);
  const [wantToReadShelf, setWantToReadShelf] = useState([]);
  const [ReadShelf, setReadShelf] = useState([]);

  useEffect(() => {
    getAll().then((books) => {
      const bookFilter = (booksList) => (shelf) =>
        booksList.filter((b) => b.shelf === shelf);
      const filterBy = bookFilter(books);
      setCurrentlyReadingShelf(filterBy("currentlyReading"));
      setWantToReadShelf(filterBy("wantToRead"));
      setReadShelf(filterBy("read"));
    });
  }, []);

  return (
    <React.Fragment>
      <Hero />

      <Shelf shelfTitle={"Currently Reading"} bookList={currentlyReadingShelf} />

      <Shelf shelfTitle={"Want To Read"} bookList={wantToReadShelf} />

      <Shelf shelfTitle={"Read"} bookList={ReadShelf} />

      <FabFixedBtn
        btnHref={"/search"}
        btnColor={"text-indigo-700 bg-indigo-100 hover:bg-indigo-200"}
      />
    </React.Fragment>
  );
};

export default HomeView;
