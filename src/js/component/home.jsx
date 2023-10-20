import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./Header";
import Tablero from ".//Tablero";
import Jugadores from "./Jugadores";

//create your first component
const Home = () => {
	return (
		<>
			<Header />
			<Tablero />
			<Jugadores />
		</>
	)
}

export default Home;
