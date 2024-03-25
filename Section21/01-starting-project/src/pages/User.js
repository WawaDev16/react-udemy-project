import { Link } from "react-router-dom";
const USER = [
  { id: 1, title: "User 1" },
  { id: 2, title: "User 2" },
  { id: 3, title: "User 3" },
  { id: 4, title: "User 4" },
  { id: 5, title: "User 5" },
];

function User() {
  return (
    <>
      <h1>The Users Page</h1>
      <ul>
        {USER.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default User;
