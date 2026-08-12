import { IoMdSearch } from "react-icons/io";
import Input from "../atoms/Input";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = "" }: SearchBarProps) {
  return (
    <div
      className={`h-8 md:h-10 w-[80vw] sm:w-[40vw] flex justify-between items-center bg-surface border border-card-border rounded-full ${className}`}
    >
      <Input
        id="search"
        placeholder="Search"
        autoComplete="off"
        className="grow! border-none! bg-transparent p-0! pl-4! shadow-none! ring-0! outline-none!"
      />
      <label
        htmlFor="search"
        aria-label="Search"
        className="flex items-center justify-center h-full w-12 bg-primary rounded-br-full rounded-tr-full text-text-light hover:bg-primary/80 transition-colors duration-300 cursor-pointer"
      >
        <IoMdSearch size={18} />
      </label>
    </div>
  );
}
