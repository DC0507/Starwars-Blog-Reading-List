import styles from "../../styles/cards.scss";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Card, Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Cards = props => {
	const { actions } = useContext(Context);

	return (
		<>
			<h1 className="mb-3">{props.heading}</h1>
			<Table className="cards.myclass" borderless={true} responsive>
				<tbody>
					<tr>
						{props.arr.map((item, i) => {
							return (
								<td key={i}>
									<Card bg="dark" text="white" style={{ width: "20rem" }}>
										<Card.Img variant="top" src="https://fakeimg.pl/350x200" />
										<Card.Body>
											{Object.entries(item).map((el, i) => {
												if (i == 0) {
													return <Card.Title key={i}>{el[1]}</Card.Title>;
												} else if (i < props.numProp) {
													return <Card.Text key={i}>{`${el[0]}: ${el[1]}`}</Card.Text>;
												}
											})}
											<Button variant="warning">
												<Link
													to={props.itemPath + i}
													style={{ textDecoration: "none", color: "#666666" }}>
													<b>Learn more</b>
												</Link>
											</Button>
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
	arr: PropTypes.array,
	numProp: PropTypes.number,
	itemPath: PropTypes.string
};
