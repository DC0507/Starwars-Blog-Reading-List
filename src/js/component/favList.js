import React, { useContext } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const FavList = () => {
	const { store } = useContext(Context);

	return (
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
	);
};
