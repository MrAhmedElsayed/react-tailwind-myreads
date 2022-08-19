import React from "react";
// import Dropdwon from "../components/DeleteDropdown"

const BookCard = ({ bookObject }) => {
  return (
    <React.Fragment>
      <div className="w-full px-3 sm:w-full md:w-1/4 xl:w-1/6">
        <div className="mx-auto w-full max-w-[360px]">
          <div className="relative max-w-xs p-6 rounded-md border border-slate-300 hover:border-indigo-700 hover:border-2 text-gray-900 bg-gray-100">
            <img
              src={bookObject.imageLinks.thumbnail}
              alt={bookObject.title}
              className="object-cover object-center w-full rounded-md h-50 bg-gray-500"
            />
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
              <span key={author} className="text-gray-900"> {author}, </span>
            ))}

            {/* <Dropdwon />  */}
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookCard;
