import React from "react";
import ShelfStatus from "./DeleteDropdown";
// import Dropdwon from "../components/DeleteDropdown"

const BookCard = ({ bookObject }) => {
  return (
    <React.Fragment>
      <div className="w-full px-3 sm:w-full md:w-1/4 xl:w-1/6 mt-2">
        <div className="mx-auto w-full max-w-[360px]">
          <div className="relative max-w-xs p-6 rounded-md border border-slate-300 hover:border-indigo-700 hover:border-2 text-gray-900 bg-gray-100">
            <img
              src={bookObject.imageLinks.thumbnail}
              alt={bookObject.title}
              className="object-cover object-center w-full rounded-md h-50 bg-gray-500"
            />
            <ShelfStatus />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-violet-900">
                {bookObject.publishedDate}
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                {bookObject.title}
              </h2>
            </div>
            {/* loop authors array */}
            {bookObject.authors.map((author) => (
              <span key={author} className="text-gray-900">
                {" "}
                {author},{" "}
              </span>
            ))}

            {/* absolute pages count */}
            <span className="flex flex-row absolute top-0 left-0 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="p-1">{bookObject.pageCount}</span>
            </span>

            {/* absolute button  */}
            {/* <a
              href="/"
              className="absolute top-0 right-0 p-1 text-indigo-700 hover:text-indigo-500"
            >
              <span className="sr-only">Status</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </a> */}

            {/* try dropdown */}
            

            {/* <Dropdwon />  */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookCard;
