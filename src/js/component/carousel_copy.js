import "../../styles/carousel.scss";

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import starWarsImg from "../../img/starWars.png";
import { Carousel, Card, Button } from "react-bootstrap";

export const Carouse_l = props => {
	return (
		<>
			<h1 className="text-center mb-3">{props.heading}</h1>
			<Carousel controls={false} indicators={false} fade>
				{props.arr.map((item, i) => {
					return (
						<Carousel.Item key={i}>
							<Card bg="dark" text="white" style={{ width: "18rem" }}>
								<Card.Img variant="top" src="https://fakeimg.pl/350x200/?text=Sample Pic" />
								<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>Some quick</Card.Text>
									<Button variant="warning">Learn more</Button>
								</Card.Body>
							</Card>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</>
	);
};

Carouse_l.propTypes = {
	heading: PropTypes.string,
	arr: PropTypes.array
};
