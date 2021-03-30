import "../../styles/vehicles.scss";
import React, { useContext } from "react";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
import { Container, Col } from "react-bootstrap";

export const Vehicles = () => {
	const { store } = useContext(Context);
	return (
		<Col md={{ span: 8, offset: 1 }}>
			<Cards numProp={4} heading="Vehicles" arr={store.vehicles} />
		</Col>
	);
};
