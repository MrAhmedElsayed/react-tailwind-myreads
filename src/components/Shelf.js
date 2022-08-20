import React from "react";
// import BookCard from "./BookCard";
// import {
//   AnnotationIcon,
//   GlobeAltIcon,
//   LightningBoltIcon,
//   ScaleIcon,
// } from "@heroicons/react/outline";

import { HeartIcon } from "@heroicons/react/outline";

// const features = [
//   {
//     name: "Competitive exchange rates",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: GlobeAltIcon,
//   },
//   {
//     name: "No hidden fees",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: ScaleIcon,
//   },
//   {
//     name: "Transfers are instant",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: LightningBoltIcon,
//   },
//   {
//     name: "Mobile notifications",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: AnnotationIcon,
//   },
// ];

const Shelf = ({ shelfTitle, bookList }) => {
  // * shelfTitle: the title of shelf appear in upper center shelf
  // * bookList: the books list comes from api and filtered by shelf
  return (
    <React.Fragment>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
              {shelfTitle}
            </p>
          </div>

          {/* start */}
          {/* <a
            href="#"
            class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a> */}
          {/* end */}

          <div className="mx-auto my-5 border-4 border-dashed border-gray-200 rounded-lg h-auto p-5">
            <div className="container my-12 mx-auto px-4 md:px-12">
              <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="/">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="/"
                        >
                          Article Title
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="/"
                      >
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          src="https://picsum.photos/32/32/?random"
                        />
                        <p className="ml-2 text-sm">Author Name</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="/"
                      >
                        <span className="hidden">Like</span>
                        <HeartIcon />
                      </a>
                    </footer>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}

                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="/">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="/"
                        >
                          Article Title
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="/"
                      >
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          src="https://picsum.photos/32/32/?random"
                        />
                        <p className="ml-2 text-sm">Author Name</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="/"
                      >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}

                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="/">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="/"
                        >
                          Article Title
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="/"
                      >
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          src="https://picsum.photos/32/32/?random"
                        />
                        <p className="ml-2 text-sm">Author Name</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="/"
                      >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}

                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="/">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="/"
                        >
                          Article Title
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="/"
                      >
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          src="https://picsum.photos/32/32/?random"
                        />
                        <p className="ml-2 text-sm">Author Name</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="/"
                      >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}

                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="/">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="/"
                        >
                          Article Title
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="/"
                      >
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          src="https://picsum.photos/32/32/?random"
                        />
                        <p className="ml-2 text-sm">Author Name</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="/"
                      >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}

                {/* <!-- Column --> */}
                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  {/* <!-- Article --> */}
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="/">
                      <img
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="/"
                        >
                          Article Title
                        </a>
                      </h1>
                      <p className="text-grey-darker text-sm">11/1/19</p>
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="/"
                      >
                        <img
                          alt="Placeholder"
                          className="block rounded-full"
                          src="https://picsum.photos/32/32/?random"
                        />
                        <p className="ml-2 text-sm">Author Name</p>
                      </a>
                      <a
                        className="no-underline text-grey-darker hover:text-red-dark"
                        href="/"
                      >
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                      </a>
                    </footer>
                  </article>
                  {/* <!-- END Article --> */}
                </div>
                {/* <!-- END Column --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shelf;
