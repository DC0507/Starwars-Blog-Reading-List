import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const People = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pb-5">
			<Cards heading="People" obj={store.people} path="/people" n={4} />
		</div>
	);
};
