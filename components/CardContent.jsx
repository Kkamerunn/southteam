import UserIcon from "./icons/UserIcon";
import { Link } from "react-router-dom";

const CardContent = ({ user, activeLink = true, fixedWidth = false }) => {
  return (
    <>
      <div className={fixedWidth ? "w-300" : ""}>
        <div className="bg-blue">
          {activeLink && (
            <Link to={`/edit/${user.id}`} className="user-icon">
              <UserIcon />
            </Link>
          )}

          <p className="username ">{user.name}</p>
        </div>
        <div className="bg-white">
          <img
            src={user.avatar}
            alt="avatar"
            width="50"
            height="50"
            className="avatar-img"
          />
          <p className="user-data">{user.email}</p>
          <p className="user-data">{user.phone}</p>
          <p className="user-data">{user.address}</p>
        </div>
      </div>
    </>
  );
};

export default CardContent;
