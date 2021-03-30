import "../../styles/home.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Container, Row, Col, Accordion, Button, Card } from "react-bootstrap";
import { Cards } from "../component/cards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid>
			<Row className="text-center">
				<Col md={2} m={0}>
					<Accordion>
						<Card bg="dark" text="white" style={{ width: "18rem" }} className="m-5">
							<Card.Header>Favorites</Card.Header>
							<Card.Header>
								<Accordion.Toggle as={Button} variant="link" eventKey="0">
									Characters
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									{store.favorites.map((item, i) => {
										return (
											<Card.Title variant="warning" key={i}>
												{item}
											</Card.Title>
										);
									})}
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</Col>
				<Col md={{ span: 8, offset: 1 }}>
					<Cards numProp={4} heading="Characters" arr={store.people} />
					<Cards numProp={4} heading="Planets" arr={store.planets} />
					<Cards numProp={4} heading="Vehicles" arr={store.vehicles} />
				</Col>
			</Row>
		</Container>
	);
};
