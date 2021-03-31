import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Col, Card, Table } from "react-bootstrap";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<Col md={{ span: 8, offset: 1 }}>
			<Card bg="dark">
				<Table borderless responsive striped bordered variant="dark" size="sm">
					<thead>
						<tr>
							<th className="text-center" colSpan="7" style={{ fontSize: "20pt" }}>
								{store.people[params.theid].name}
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
							<td colSpan="3">
								There are many variations of passages of Lorem Ipsum available, but the majority have
								suffered alteration in some form, by injected humour, or randomised words which dont
								look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
								need to be sure there isnt anything embarrassing hidden in the middle of text.
							</td>
						</tr>
						<tr>
							<td>Height</td>
							<td>Mass</td>
							<td>Hair color</td>
							<td>Skin color</td>

							<td>Eye color</td>
							<td>Birth year</td>
							<td>Gender</td>
						</tr>
						<tr>
							<td>{store.people[params.theid].height}</td>
							<td>{store.people[params.theid].mass}</td>
							<td>{store.people[params.theid].hair_color}</td>
							<td>{store.people[params.theid].skin_color}</td>
							<td>{store.people[params.theid].eye_color}</td>
							<td>{store.people[params.theid].birth_year}</td>
							<td>{store.people[params.theid].gender}</td>
						</tr>
					</tbody>
				</Table>
			</Card>
		</Col>
	);
};

Character.propTypes = {
	match: PropTypes.object
};
