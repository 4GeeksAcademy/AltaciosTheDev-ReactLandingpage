import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<Jumbotron/>
			<Cards/>
			<Footer/>
		</div>
	);
};

export default Home;
