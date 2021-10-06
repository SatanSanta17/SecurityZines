import React from "react";
import Home from "./components/home";
import { Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Route path="/" component={"home"} />
			<Home />
		</div>
	);
}

export default App;
