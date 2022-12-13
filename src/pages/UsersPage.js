import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function UsersPage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser)
  console.log(loggedInUser)
  // Redirect if user accesses page directly via url and does not have permissions 
  // (This is mainly for usability, authorization is of course handled by the api)
  if (typeof loggedInUser.perms !== 'undefined' ) {
    if ( typeof loggedInUser.perms.users === 'undefined' || loggedInUser.user.Role === 'role::superadmin') {
      return <Navigate to="/" replace />
    }
  }
  return (
    <>

    </>
  );
}
