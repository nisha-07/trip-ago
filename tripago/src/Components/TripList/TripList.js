import { useEffect, useState } from "react";

export default function TripList() {
  const [trips, setTrips] = useState([])

    console.log(trips)
    
    // useEffect -> will be called once only when the compoenent is being rendered with empty []
    // we cannot use async with useEffect and then call await funtion inside
    // instead we can have async function inside useEffect
    useEffect(() => {
        fetch('http://localhost:3000/trips')
          .then(response => response.json())
            .then(json => setTrips(json))
    }, [])

  return (
    <div>
          <h2>Trip List</h2>
          {trips.map((trip, index) => (
              <div key={index}>
              <p>{trip.title}</p>
                  <p>{trip.price}</p>
                  </div>
          ))}
    </div>
  )
}