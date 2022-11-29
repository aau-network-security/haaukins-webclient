import React from 'react'
import OrganizationsTable from '../components/organizations/OrganizationsTable'
import Header from "../components/header/NavBar";
function OrganizationsPage() {
  return (
    <div>
      <Header className="Header"/>
      <h2>Organizations</h2>
      <OrganizationsTable/>
    </div>
  )
}

export default OrganizationsPage