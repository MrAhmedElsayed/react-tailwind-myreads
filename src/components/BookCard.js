import React from "react";
import SelectShelfList from "./SelectShelfList";



const BookCard = ({ bookObject }) => {
  
  return (
    <React.Fragment>
      <div className="overflow-hidden my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div className="relative flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={bookObject.imageLinks.thumbnail}
            alt={bookObject.title}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {bookObject.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {bookObject.authors.map((author) => (
                <span key={author} className="text-gray-900">
                  {author},
                </span>
              ))}
            </p>
          </div>
          {/* absolute pages count */}
          <span className="flex flex-row absolute bottom-0 right-0 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
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

          {/* dropdown menu */}
            <SelectShelfList bookShelf={"read"} />
          {/* dropdown menu */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookCard;
