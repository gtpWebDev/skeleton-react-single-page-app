import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useParams } from "react-router-dom";

const Profile = () => {
  const { profileId } = useParams();

  return (
    <div>
      <h3>Profile page</h3>
      <p>Profile number: {profileId}</p>
    </div>
  );
};

export default Profile;
