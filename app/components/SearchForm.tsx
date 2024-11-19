"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const SearchForm = () => {
  return (
    <>
      <form
        action={`/search`}
        className="sm:flex items-center bg-gray-100 rounded-md px-2 py-1 gap-2 2xl:w-[700px] lg:w-[300px] h-[35px] md:w-[250px] hidden"
      >
        <MagnifyingGlass size={20} className="text-gray-500" />
        <input
          type="text"
          name="query"
          defaultValue="Nike"
          placeholder="Search"
          className="outline-none bg-transparent leading-none placeholder:text-sm text-gray-500 h-[15px] py-4 w-full"
        />
      </form>

      <form
        action={`/search`}
        className="flex items-center bg-gray-100 rounded-md px-2 py-1 gap-2 w-[180px] h-[30px] sm:hidden"
      >
        <MagnifyingGlass size={20} className="text-gray-500" />
        <input
          type="text"
          name="query"
          placeholder="Search"
          className="outline-none bg-transparent leading-none placeholder:text-sm text-gray-500 h-[10px] py-4 w-full text-xs"
        />
      </form>
    </>
  );
};

export default SearchForm;
