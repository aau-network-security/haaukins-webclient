import React from 'react'
import OrganizationsTable from '../components/organizations/OrganizationsTable'
function OrganizationsPage(props) {
  return (
    <>
    <div className='table-container'>
      <OrganizationsTable refresh="false"/>
    </div>
      
    </>
          
  )
}

export default OrganizationsPage