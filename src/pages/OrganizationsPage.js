import React from 'react'
import OrganizationsTable from '../components/tables/OrganizationsTable'
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