import { useAtom } from "jotai";
import { FormEvent, SyntheticEvent, useState } from "react";
import { FaBackspace, FaSearch } from "react-icons/fa";
import { filterStore } from "../../store/necromante.store";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useAtom(filterStore);

  function handleSearch(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setFilter(search);
  }

  function clearSearch(
    event: SyntheticEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    setSearch("");
    setFilter("");
  }

  return (
    <form
      className="flex flex-1 mx-4 gap-2 mt-1 relative w-full"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        className="outline-none border rounded p-2 border-gray-200 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <button
          type="button"
          className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full"
          onClick={clearSearch}
        >
          <FaBackspace />
        </button>
      )}
      <button
        type="submit"
        className="p-2 hover:bg-gray-200 rounded-full absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        <FaSearch />
      </button>
    </form>
  );
};
