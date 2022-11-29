import React from 'react'
import { useSelector } from 'react-redux'

function EventInfo() {
  const state = useSelector((state) => state)
  console.log(state)
  return (
    <div>
        <h2>Events</h2>
        <button>Create event</button>
    </div>
  )
}

export default EventInfo