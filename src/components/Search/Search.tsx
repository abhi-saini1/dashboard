import { SearchIcon } from 'lucide-react'
import React, { useState } from 'react'

interface SearchBarProps {
    onSearch: (query: string) => void;
  }

const Search :React.FC<SearchBarProps>= ({onSearch}) => {
    const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <div className="pt-2 pb-5 relative flex items-center justify-center  text-gray-600">
        <input
          className="border-2 text-xs  border-gray-300 p-4 h-10 w-[350px] rounded-full focus:outline-none"
          type="search"
          name="search"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className="absolute  ml-[310px] ">
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
  )
}

export default Search