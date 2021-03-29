import React, { useContext } from "react";
import "../../styles/home.scss";
import { Carouse_l } from "../component/carousel";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const Home2 = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row className="mt-5">
				<Col>
					<p>Here will be my characters!!</p>
				</Col>
			</Row>
		</Container>
	);
};
