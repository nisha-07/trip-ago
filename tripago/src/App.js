import "./App.css";

import TripList from "./Components/TripList/TripList";
import TripListWithCustomHook from "./Components/TripList/TripListWithCustomHook";

function App() {
	return (<div className="App">
		<TripList />
		<TripListWithCustomHook />
	</div>);

}

export default App;
