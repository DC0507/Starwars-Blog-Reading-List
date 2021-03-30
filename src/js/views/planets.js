import "../../styles/planets.scss";
import React, { useContext } from "react";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
import { Container, Col } from "react-bootstrap";

export const Planets = () => {
	const { store } = useContext(Context);
	return (
		<Col md={{ span: 8, offset: 1 }}>
			<Cards numProp={4} heading="Planets" arr={store.planets} />
		</Col>
	);
};
