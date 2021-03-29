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
			<Row className="mt-5">
				<Col>
					<Carouse_l path="/characters" heading="Characters" arr={store.people} />
				</Col>
				<Col>
					<Carouse_l path="/planets" heading="Planets" arr={store.planets} />
				</Col>
				<Col>
					<Carouse_l path="/vehicles" heading="Vehicles" arr={store.vehicles} />
				</Col>
			</Row>
		</Container>
	);
};
