import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function UsersPage() {
  const perms = useSelector((state) => state.user.loggedInUser.perms)
  console.log(perms)
  // Redirect if user accesses page directly via url and does not have permissions 
  // (This is mainly for usability, authorization is of course handled by the api)
  if (typeof perms !== 'undefined' ) {
    if ( typeof perms.users === 'undefined' ) {
      return <Navigate to="/" replace />
    }
  }
  return (
    <>

    </>
  );
}
