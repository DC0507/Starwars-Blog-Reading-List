import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Col, Card, Table } from "react-bootstrap";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<Col md={{ span: 8, offset: 1 }}>
			<Card bg="dark">
				<Table borderless responsive striped bordered variant="dark" size="sm">
					<thead>
						<tr>
							<th className="text-center" colSpan="7" style={{ fontSize: "20pt" }}>
								{store.planets[params.theid].name}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan="4">
								{" "}
								<Card.Img
									variant="top"
									src="https://fakeimg.pl/845x360"
									style={{ width: "845px", height: "360px" }}
								/>
							</td>
							<td colSpan="4">
								There are many variations of passages of Lorem Ipsum available, but the majority have
								suffered alteration in some form, by injected humour, or randomised words which dont
								look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
								need to be sure there isnt anything embarrassing hidden in the middle of text.
							</td>
						</tr>
						<tr>
							<td>Rotation Period</td>
							<td>Orbital Period</td>
							<td>Diameter</td>
							<td>Climate</td>

							<td>Gravity</td>
							<td>Terrain</td>
							<td>Surface Water</td>
							<td>Population</td>
						</tr>
						<tr>
							<td>{store.planets[params.theid].rotation_period}</td>
							<td>{store.planets[params.theid].orbital_period}</td>
							<td>{store.planets[params.theid].diameter}</td>
							<td>{store.planets[params.theid].climate}</td>
							<td>{store.planets[params.theid].gravity}</td>
							<td>{store.planets[params.theid].terrain}</td>
							<td>{store.planets[params.theid].surface_water}</td>
							<td>{store.planets[params.theid].population}</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		</Col>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};
