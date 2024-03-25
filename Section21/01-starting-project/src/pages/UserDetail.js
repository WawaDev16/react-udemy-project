import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function UserDetail() {
  const params = useParams();

  return (
    <>
      <h1> User Details!</h1>
      <p>{params.userId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
      <p></p>
    </>
  );
}
export default UserDetail;
