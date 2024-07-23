import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import useGetBackendData from "./useGetBackendData";

import { useParams } from "react-router-dom";

const Dashboard = () => {
  // params not needed as JWT _id used
  // const { profileId } = useParams();

  // custom hook
  const { data, error, loading } = useGetBackendData("/user/dashboard");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error status ${error.status}: ${error.message}.`}</p>;

  return (
    <>
      <h3>Dashboard</h3>
      <div>
        <p>You are authorized!</p>
        <p>Profile id: {data._id}</p>
        <p>Username: {data.username}</p>
        <p>Admin?: {data.admin ? "true" : "false"}</p>
      </div>
    </>
  );
};

export default Dashboard;
