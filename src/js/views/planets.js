import "../../styles/planets.scss";
import React, { useContext } from "react";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container className="mt-5">
			<Cards heading="Planets" arr={store.planets} />
		</Container>
	);
};
