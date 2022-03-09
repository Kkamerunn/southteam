import { useEffect } from "react";

const SortSelect = ({ users, setUsers }) => {
  useEffect(() => {}, [users]);

  const sortUsersList = (e) => {
    switch (e.target.value) {
      case "username":
        const usersListSortedByName = [...users].sort((a, b) => {
          b.name - a.name;
        });
        console.log(usersListSortedByName);
        setUsers(usersListSortedByName);
        break;
      case "email":
        const usersListSortedByEmail = [...users].sort((a, b) => {
          b.email - a.email;
        });
        setUsers(usersListSortedByEmail);
        break;
      case "phone":
        const usersListSortedByPhone = [...users].sort((a, b) => {
          b.phone - a.phone;
        });
        setUsers(usersListSortedByPhone);
        break;
      case "address":
        const usersListSortedByCity = [...users].sort((a, b) => {
          b.address - a.address;
        });
        setUsers(usersListSortedByCity);
        break;
      default:
        return;
    }
  };

  return (
    <form className="form-control">
      <select
        name="selected_field"
        className="input-control wider"
        onChange={(e) => sortUsersList(e)}
      >
        <option value="">Select</option>
        <option value="username">First name</option>
        <option value="email">Email</option>
        <option value="phone">Phone number</option>
        <option value="address">City</option>
      </select>
    </form>
  );
};

export default SortSelect;
