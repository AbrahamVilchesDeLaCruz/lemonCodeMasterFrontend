import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { org, id } = useParams<{ org: string; id: string }>();
  
  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <Link to="/list" state={{ org: org }}>
        Back to list page
      </Link>
    </>
  );
};
