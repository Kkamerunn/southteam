import { useState, useEffect } from "react";
import CardContent from "./CardContent";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditCard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const usersStorage = JSON.parse(localStorage.getItem("users"));
    const [userStorage] = [...usersStorage].filter(
      (user) => user.id === params.id
    );
    setUser(userStorage);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const index = [...users].findIndex((u) => user.id === u.id);

    const usersUpdated = [
      ...users.slice(0, index),
      user,
      ...users.slice(index + 1),
    ];

    localStorage.setItem("users", JSON.stringify(usersUpdated));

    navigate("/");
  };

  return (
    <>
      <div className="edit-page">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="input-control wider editable"
                name="name"
                placeholder="New name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input-control wider editable"
                name="email"
                placeholder="New email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                className="input-control wider editable"
                name="phone"
                placeholder="New phone number"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                className="input-control wider editable"
                name="address"
                placeholder="New address"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex">
              <button type="submit" className="btn">
                Edit
              </button>
              <Link to="/" className="btn-cancel">
                Cancel
              </Link>
            </div>
          </div>
        </form>
        <CardContent user={user} activeLink={false} fixedWidth={true} />
      </div>
    </>
  );
};

export default EditCard;
