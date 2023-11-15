import { QueueInput } from "../QueueInput";
import { Logo } from "./Logo";
import { SearchBar } from "./Searchbar";

export const Nav = () => {
  return (
    <nav className=" flex w-full justify-between p-2 sticky top-0 shadow bg-white opacity-95">
      <Logo />
      <SearchBar />
      <QueueInput />
    </nav>
  );
};
