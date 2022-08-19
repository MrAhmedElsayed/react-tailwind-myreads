import React from "react";
import Hero from "../components/Hero.js";
import Shelf from "../components/Shelf";
import SearchBtn from "../components/SearchBtn";
import { getAll } from "../services/BooksAPI";
import { useEffect } from "react";

const myBookList = [
  {
    id: 1,
    title: "The Linux Command Line",
    authors: ["ahmed", "ali"],
    imageLinks: {
      thumbnail:
        "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    publishedDate: "2021",
  },
  {
    id: 2,
    title: "The Linux Command Line",
    authors: ["ahmed", "ali"],
    imageLinks: {
      thumbnail:
        "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    publishedDate: "2021",
  },
  {
    id: 3,
    title: "The Linux Command Line",
    authors: ["ahmed", "ali"],
    imageLinks: {
      thumbnail:
        "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    publishedDate: "2021",
  },
];


// https://medium.com/bb-tutorials-and-thoughts/react-how-to-load-settings-data-from-the-server-before-initializing-an-app-515c25ee1f43

const HomeView = () => {

  useEffect(() => {
    getAll().then((users) => {
      console.log(users);
    });
  }, []);


  return (
    <React.Fragment>
      <Hero />

      <Shelf shelfTitle={"Currently Reading"} bookList={myBookList} />
      <Shelf shelfTitle={"Want To Read"} bookList={myBookList} />
      <Shelf shelfTitle={"Read"} bookList={myBookList} />
      <SearchBtn />
    </React.Fragment>
  );
};

export default HomeView;
