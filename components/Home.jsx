import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import SortSelect from "../components/SortSelect";
import Error from "./Error";

const Home = () => {
  const [users, setUsers] = useState([]);

  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      getUsers();
    } else {
      getUsersFromLocalStorage();
    }
  }, []);

  const getUsers = async () => {
    try {
      const resAPI = await fetch(`https://randomuser.me/api/?results=9`);
      const { results } = await resAPI.json();

      const usersList = results.map((res) => {
        return {
          id: `${res.id.value}_${Math.random().toString(36).substr(2, 9)}`,
          name: `${res.name.first} ${res.name.last}`,
          avatar: res.picture.medium,
          phone: res.phone,
          email: res.email,
          address: `${res.location.city} ${res.location.state}`,
        };
      });

      localStorage.setItem("users", JSON.stringify(usersList));

      setUsers(usersList);
    } catch (error) {
      setError(error);
    }
  };

  const getUsersFromLocalStorage = () => {
    setUsers(JSON.parse(localStorage.getItem("users")));
  };

  return (
    <>
      <div className="forms-container">
        <SearchBar
          search={search}
          setSearch={setSearch}
          users={users}
          setUsers={setUsers}
          getUsersFromLocalStorage={getUsersFromLocalStorage}
        />
        <SortSelect users={users} setUsers={setUsers} />
      </div>
      <Cards users={users} setUsers={setUsers} />
      {error && <Error />}
    </>
  );
};
export default Home;
