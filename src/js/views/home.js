import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardDeck } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center py-5">
			<CardDeck obj={store.people} to="/demo" src="https://fakeimg.pl/350x200/" />
		</div>
	);
};
