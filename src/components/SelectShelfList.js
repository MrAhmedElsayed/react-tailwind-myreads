import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import { update } from "../services/BooksAPI";

const bookStatus = [
  { status: "Want To Read", value: "wantToRead" },
  { status: "Currently Read", value: "currentlyReading" },
  { status: "Read", value: "read" },
];

// const getFruit = fruits.find(fruit => fruit.name === 'apples');

const SelectShelfList = ({ book, bookShelf }) => {
  useEffect(() => {
    update(book, bookShelf).then((res) => console.log(res));
  });

  const [selected, setSelected] = useState(bookStatus[0]);

  return (
    // <div >
      <Listbox value={selected} onChange={setSelected} className="absolute top-0 right-0 w-40">
        <div className="relative mt-1">
          <Listbox.Button className="inline-flex w-full justify-center rounded-md bg-indigo-600 bg-opacity-20 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {bookStatus.map((bookSt) => (
                <Listbox.Option
                  key={bookSt.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={bookSt}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {bookSt.status}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    // </div>
  );
};

export default SelectShelfList;
