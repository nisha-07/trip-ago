import { useEffect, useState } from "react";

export default function TripList() {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

    console.log(trips)
    
    // useEffect -> will be called once only when the compoenent is being rendered with empty []
    // we cannot use async with useEffect and then call await funtion inside
    // instead we can have async function inside useEffect

    // due to having url as a dependency array, whenever url is changed this useEffect will be called
    useEffect(() => {
        fetch(url)
          .then(response => response.json())
            .then(json => setTrips(json))
    }, [url])

  return (
    <div>
          <h2>Trip List</h2>
          {trips.map((trip, index) => (
              <div key={index}>
                <p>{trip.title}</p>
                <p>{trip.price}</p>
              </div>
          ))}
          <button onClick={() => setUrl('http://localhost:3000/trips?price=295')}>{"Trips having price = 295"}</button>
    </div>
  )
}