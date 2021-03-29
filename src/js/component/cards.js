import React from "react";
import { Card, Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const Cards = props => {
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
											<Button variant="warning">Learn more</Button>{" "}
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
