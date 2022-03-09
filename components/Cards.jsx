import CardContent from "./CardContent";

const Cards = ({ users }) => {
  return (
    <>
      <div className="cards-container">
        <small>Note: Click on user´s icon to edit a user</small>
        <ul>
          {users.length > 0 &&
            users.map((user) => (
              <li key={user.id} className="card-item">
                <CardContent user={user} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Cards;
