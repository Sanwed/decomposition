import Links from "./Links.tsx";
import SearchInput from "./SearchInput.tsx";

/**
 * Поиск
 * @constructor
 */
function Search() {
  return (
    <div>
      <Links />
      <SearchInput />
      <p>Найдется все,например <a href="">фаза луны сегодня</a></p>
    </div>
  )
}

export default Search
