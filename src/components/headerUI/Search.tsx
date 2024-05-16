import SearchIcon from "@/assets/icons/SearchIcon";

const Search = () => {
  return (  
    <div className="relative">
      <input 
        className="w-72 h-11 pl-3 pr-10 border border-neutral-200 dark:border-neutral-600 rounded-xl outline-lightGreen dark:outline-darkGreen"
        type="text" placeholder="Search..."
      />
      <div className="absolute top-2.5 right-3">
        <SearchIcon size="24"/>
      </div>
    </div>
  );
}
 
export default Search;