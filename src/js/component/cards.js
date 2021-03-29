import React, { useContext } from "react";
import { Card, Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Cards = props => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1 className="text-center mb-3">{props.heading}</h1>
			<Table borderless={true} responsive>
				<tbody>
					<tr>
						{props.arr.map((item, i) => {
							return (
								<td key={i}>
									<Card bg="dark" text="white" style={{ width: "18rem" }}>
										<Card.Img vvariant="top" src="https://fakeimg.pl/350x200" />
										<Card.Body>
											<Card.Title>{item.name}</Card.Title>
											<Card.Text>Some quick</Card.Text>
											<Button variant="warning">Learn more</Button>
											<Button
												className="float-right"
												variant="info"
												onClick={() => actions.setFavorites(item.name)}>
												<i className="fas fa-heart" />
											</Button>
										</Card.Body>
									</Card>
								</td>
							);
						})}
					</tr>
				</tbody>
			</Table>
		</>
	);
};

Cards.propTypes = {
	heading: PropTypes.string,
	arr: PropTypes.array
};
