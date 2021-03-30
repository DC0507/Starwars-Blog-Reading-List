import "../../styles/home.scss";
import React, { useContext } from "react";

import { Context } from "../store/appContext";
import { Container, Row, Col } from "react-bootstrap";
import { Cards } from "../component/cards";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<Col md={{ span: 8, offset: 1 }}>
			<Cards numProp={4} heading="Characters" arr={store.people} />
			<Cards numProp={4} heading="Planets" arr={store.planets} />
			<Cards numProp={4} heading="Vehicles" arr={store.vehicles} />
		</Col>
	);
};
