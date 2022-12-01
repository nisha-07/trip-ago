import useFetch from "../../hooks/useFetch";
import { useState } from "react";

export default function TripListWithCustomHook() {
    const [url, setUrl] = useState('http://localhost:3000/trips')

    const { data: trips, isLoading, error } = useFetch(url)

    return (
        <div>
            <h2>Trip List With Custom Hook</h2>
            {isLoading && <p>Loading trips...</p>}
            {error && <p className="text-danger">Error while fetching data...</p>}
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