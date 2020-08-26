import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
	return (
		<div className="app">
			{/* sidebar */}
			<Sidebar />
			{/* feed */}
			<Feed />
			{/* widgets */}
		</div>
	);
}

export default App;
