import { useCallback, useEffect, useState } from "react";

export default function TripList() {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  console.log(trips)

  // When we have refrenece types (eg. function/array/object) we need to use useCallback for the function and state for the rest types
  // We are doing this to avoid triggering the useEffect reruns all the time
  const fetchTrips = useCallback(async () => {
    const response = await fetch(url)
    const json = await response.json()
    setTrips(json);
  }, [url])

  /** 
   * useEffect -> will be called once only when the compoenent is being rendered with empty []
   * We cannot use async with useEffect and then call await funtion inside 
   * instead we can have async function inside useEffect 
   * Due to having url as a dependency array, whenever url is changed this useEffect will be called 
   * We cannot have more than one dependency in useEffect hook 
   * */
  useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

  return (
    <div>
      <h2>Trip List</h2>
      {trips && trips.map((trip, index) => (
        <div key={index}>
          <p>{trip.title}</p>
          <p>{trip.price}</p>
        </div>
      ))}
      <button onClick={() => setUrl('http://localhost:3000/trips?price=295')}>{"Trips having price = 295"}</button>
    </div>
  )
}

/** 
 * useEffect is usually the place where data fetching happens in React. 
 * Data fetching means using asynchronous functions
*/