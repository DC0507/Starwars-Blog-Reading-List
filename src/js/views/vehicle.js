import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Col, Card, Table } from "react-bootstrap";

export const Vehicle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<Col md={{ span: 8, offset: 1 }}>
			<Card bg="dark">
				<Table borderless responsive striped bordered variant="dark" size="sm">
					<thead>
						<tr>
							<th className="text-center" colSpan="7" style={{ fontSize: "20pt" }}>
								{store.vehicles[params.theid].name}
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
							<td colSpan="6">
								There are many variations of passages of Lorem Ipsum available, but the majority have
								suffered alteration in some form, by injected humour, or randomised words which dont
								look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
								need to be sure there isnt anything embarrassing hidden in the middle of text.
							</td>
						</tr>
						<tr>
							<td>Model</td>
							<td>Manufacturer</td>
							<td>Cost in credits</td>
							<td>Length</td>

							<td>Max Atmosphering Speed</td>
							<td>Crew</td>
							<td>Passengers</td>
							<td>Cargo Capacity</td>
							<td>Consumables</td>
							<td>Vehicle Class</td>
						</tr>
						<tr>
							<td>{store.vehicles[params.theid].model}</td>
							<td>{store.vehicles[params.theid].manufacturer}</td>
							<td>{store.vehicles[params.theid].cost_in_credits}</td>
							<td>{store.vehicles[params.theid].length}</td>
							<td>{store.vehicles[params.theid].max_atmosphering_speed}</td>
							<td>{store.vehicles[params.theid].crew}</td>
							<td>{store.vehicles[params.theid].passengers}</td>
							<td>{store.vehicles[params.theid].cargo_capacity}</td>
							<td>{store.vehicles[params.theid].consumables}</td>
							<td>{store.vehicles[params.theid].vehicle_class}</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		</Col>
	);
};

Vehicle.propTypes = {
	match: PropTypes.object
};
