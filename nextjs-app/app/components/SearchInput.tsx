"use client";

import { ChangeEvent, useState } from "react";
import { globalSearch } from "../actions";

export default function SearchInput() {
  const [searchResults, setSearchResults] = useState<any>(null);
  return (
    <label className="relative">
      <span>Search: </span>
      <input
        className="border"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const currentValue = e.target.value;

          globalSearch(currentValue).then(({ data }) => setSearchResults(data));
        }}
      />
      {searchResults && <div className="absolute top-[100%] left-0">test</div>}
    </label>
  );
}
