import React, { useContext } from "react";
import "../../styles/home.scss";
import { Carouse_l } from "../component/carousel";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row>
				<Col>
					<Carouse_l heading="Characters" arr={store.people} />
				</Col>
				<Col>
					<Carouse_l heading="Planets" arr={store.planets} />
				</Col>
				<Col>
					<Carouse_l heading="Vehicles" arr={store.vehicles} />
				</Col>
			</Row>
		</Container>
	);
};
