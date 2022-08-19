import React from "react";
import BookCard from "./BookCard";

const Shelf = ({ shelfTitle, bookList }) => {
  // * shelfTitle: the title of shelf appear in upper center shelf
  // * bookList: the books list comes from api and filtered by shelf
  return (
    <React.Fragment>
      <section className="px-5 pt-5 lg:pt-[20px] lg:pb-10">
        <div className="container">
          {/*  */}
          <div className="bg-gray-100 mb-10 m-10">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-5 lg:px-8 lg:flex lg:items-center lg:justify-start">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight"
              style={{ fontFamily: "Tangerine", fontSize: 70 }}
              >
                <span className="block text-indigo-600">{shelfTitle}</span>
              </h2>
            </div>
          </div>
          {/*  */}
          {/* shelf title */}
          {/* <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2
                  className="mb-4 text-3xl font-bold text-indigo-600 sm:text-4xl md:text-[40px]"
                  style={{ fontFamily: "Tangerine", fontSize: 70 }}
                >
                  {shelfTitle}
                </h2>
              </div>
            </div>
          </div> */}
          {/* end shelf title */}

          {/* start wrap cards */}
          <div className="-mx-4 flex flex-wrap justify-center">
            {bookList.map((book) => (
              <BookCard key={book.id} bookObject={book} />
            ))}
          </div>
          {/* end wrap cards */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Shelf;
