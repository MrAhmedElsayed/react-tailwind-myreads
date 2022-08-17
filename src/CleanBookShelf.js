const BookShelf = ({ shelfTitle, bookList }) => {
  return (
    <React.Fragment>
      <section className="px-10 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container">
          {/* shelf title */}
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2
                  className="mb-4 text-3xl font-bold text-indigo-600 sm:text-4xl md:text-[40px]"
                  style={{ fontFamily: "EB Garamond" }}
                >
                  {shelfTitle}
                </h2>
              </div>
            </div>
          </div>
          {/* end shelf title */}

          {/* start wrap cards */}
          <div className="-mx-4 flex flex-wrap justify-center">
            {/* start */}

            {/* 
            Here Try to parse all cards in "bookList"
            */}
            <div className="w-full px-3 sm:w-full md:w-1/4 xl:w-1/6">
              <div className="mx-auto mb-10 w-full max-w-[360px]">
                <div className="relative max-w-xs p-6 rounded-md border border-slate-300 hover:border-indigo-700 hover:border-2 text-gray-900 bg-gray-100">
                  <img
                    src="http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-50 bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-900">
                      2012
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">
                      The Linux Command Line
                    </h2>
                  </div>
                  <p className="text-gray-900">William E. Shotts, Jr.</p>
                  <ExampleDropdown />
                </div>
              </div>
            </div>

            <div className="w-full px-3 sm:w-full md:w-1/4 xl:w-1/6">
              <div className="mx-auto mb-10 w-full max-w-[360px]">
                <div className="relative max-w-xs p-6 rounded-md border border-slate-300 hover:border-indigo-700 hover:border-2 hover:shadow-md text-gray-900 bg-gray-100">
                  <img
                    src="http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-50 bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-900">
                      2012
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">
                      The Linux Command Line
                    </h2>
                  </div>
                  <p className="text-gray-900">William E. Shotts, Jr.</p>
                  <ExampleDropdown />
                </div>
              </div>
            </div>

            <div className="w-full px-3 sm:w-full md:w-1/4 xl:w-1/6">
              <div className="mx-auto mb-10 w-full max-w-[360px]">
                <div className="relative max-w-xs p-6 rounded-md border border-slate-300 hover:border-indigo-700 hover:border-2 hover:shadow-md text-gray-900 bg-gray-100">
                  <img
                    src="http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-50 bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-900">
                      2012
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">
                      The Linux Command Line
                    </h2>
                  </div>
                  <p className="text-gray-900">William E. Shotts, Jr.</p>
                  <ExampleDropdown />
                </div>
              </div>
            </div>

            <div className="w-full px-3 sm:w-full md:w-1/4 xl:w-1/6">
              <div className="mx-auto mb-10 w-full max-w-[360px]">
                <div className="relative max-w-xs p-6 rounded-md border border-slate-300 hover:border-indigo-700 hover:border-2 hover:shadow-md text-gray-900 bg-gray-100">
                  <img
                    src="http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-50 bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-900">
                      2012
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">
                      The Linux Command Line
                    </h2>
                  </div>
                  <p className="text-gray-900">William E. Shotts, Jr.</p>
                  <ExampleDropdown />
                </div>
              </div>
            </div>

            <div className="w-full px-3 sm:w-full md:w-1/4 xl:w-1/6">
              <div className="mx-auto mb-10 w-full max-w-[360px]">
                <div className="relative max-w-xs p-6 rounded-md border border-slate-300 hover:border-indigo-700 hover:border-2 hover:shadow-md text-gray-900 bg-gray-100">
                  <img
                    src="http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-50 bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-900">
                      2012
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">
                      The Linux Command Line
                    </h2>
                  </div>
                  <p className="text-gray-900">William E. Shotts, Jr.</p>
                  <ExampleDropdown />
                </div>
              </div>
            </div>

            <div className="w-full px-3 sm:w-full md:w-1/4 xl:w-1/6">
              <div className="mx-auto mb-10 w-full max-w-[360px]">
                <div className="relative max-w-xs p-6 rounded-md border border-slate-300 hover:border-indigo-700 hover:border-2 hover:shadow-md text-gray-900 bg-gray-100">
                  <img
                    src="http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-50 bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-900">
                      2012
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">
                      The Linux Command Line
                    </h2>
                  </div>
                  <p className="text-gray-900">William E. Shotts, Jr.</p>
                  <ExampleDropdown />
                </div>
              </div>
            </div>
            {/* end */}
          </div>
          {/* end wrap cards */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default BookShelf;
