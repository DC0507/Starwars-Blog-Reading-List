import "../../styles/home.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Container, Row, Col } from "react-bootstrap";
import { Cards } from "../component/cards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container my-5>
			<Row className="text-center">
				<Cards heading="Characters" arr={store.people} />
				<Cards heading="Planets" arr={store.planets} />
				<Cards heading="Vehicles" arr={store.vehicles} />
			</Row>
		</Container>
	);
};
