import { useEffect } from "react";
import MagnifierGlass from "./icons/MagnifierGlass";

const SearchBar = ({
  search,
  setSearch,
  users,
  setUsers,
  getUsersFromLocalStorage,
}) => {
  useEffect(() => {}, [users, search]);

  const filterCards = (e) => {
    setSearch(e.target.value);
    if (search.length < 1) {
      getUsersFromLocalStorage();
    } else {
      const filteredUsers = [...users].filter(
        (user) =>
          matchWords(user.name) ||
          matchWords(user.email) ||
          matchWords(user.phone) ||
          matchWords(user.address)
      );

      setUsers(filteredUsers);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (search.trim() === "") {
      return;
    } else {
      const filteredUsers = [...users].filter(
        (user) =>
          matchWords(user.name) ||
          matchWords(user.email) ||
          matchWords(user.phone) ||
          matchWords(user.address)
      );

      setUsers(filteredUsers);
    }
  };

  const matchWords = (input) => {
    return input.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <>
      <form className="form-control">
        <input
          type="text"
          placeholder="Type to find a user..."
          value={search}
          onChange={(e) => filterCards(e)}
          className="input-control"
        />
        <button
          type="submit"
          className="search-btn"
          onClick={(e) => handleSubmit(e)}
        >
          <MagnifierGlass />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
