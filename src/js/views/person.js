import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { BigCard } from "../component/bigCard";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Person = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container pb-5">
			<p>Resultados de la persona elegida...</p>
		</div>
	);
};
