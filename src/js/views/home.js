import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pb-5">
			<Cards heading="People" obj={store.people} deckPath="/people" cardPath="/person" n={4} />
			<Cards heading="Planets" obj={store.planets} deckPath="/planets" cardPath="/planet" n={4} />
			<Cards heading="Vehicles" obj={store.vehicles} deckPath="/vehicles" cardPath="/vehicle" n={4} />
		</div>
	);
};
