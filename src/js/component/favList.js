import React, { useContext } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const FavList = () => {
	const { store } = useContext(Context);

	return (
		<Accordion>
			<Card className="text-center m-5" bg="dark" text="white" style={{ width: "18rem" }}>
				<Accordion.Toggle
					className="text-white"
					as={Card.Header}
					eventKey="0"
					style={{ textDecoration: "none", fontSize: "20pt" }}>
					Favorites
					<i className="fas fa-angle-down ml-2 mt-4" />
				</Accordion.Toggle>

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
