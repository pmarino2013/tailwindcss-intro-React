import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById } from "../helpers/fetchUsers";
const UserScreen = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUserById(id).then((response) => {
      setUser(response);
    });
  }, [id]);

  return (
    <div className="flex justify-center mt-5">
      <h1 className="text-4xl">User Page</h1>
    </div>
  );
};

export default UserScreen;
