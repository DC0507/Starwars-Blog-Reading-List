import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import starWarsImg from "../../img/starWars.png";

const CardBody = props => {
	return (
		<>
			<img src="https://fakeimg.pl/350x200/" className="card-img-top" />
			<div className="card-body" style={{ listStyle: "none" }}>
				<h5 className="card-title">{props.title}</h5>
				<li>{`Gender: ${props.gender}`}</li>
				<li>{`Hair color: ${props.hair}`}</li>
				<li>{`Eye-color: ${props.eyes}`}</li>
				<hr />
				<Link to={props.cardPath} style={{ textDecoration: "none" }} className="btn btn-warning mt-2">
					Learn more
				</Link>
				<small className="text-info float-right mr-2" style={{ fontSize: "20pt" }}>
					♡
				</small>
			</div>
		</>
	);
};

export const Cards = props => {
	return (
		<>
			<Link to={props.deckPath} style={{ textDecoration: "none" }}>
				<h1 className="text-center" style={{ textShadow: "2px 2px black", color: "silver" }}>
					{props.heading}
				</h1>
			</Link>
			<div className="card-deck my-5">
				{props.obj.map((item, i) => {
					if (i < props.n) {
						return (
							<div key={i} className="card bg-secondary">
								<CardBody
									title={item.name}
									gender={item.gender}
									hair={item.hair_color}
									eyes={item.eye_color}
									cardPath={props.cardPath}
								/>
							</div>
						);
					}
				})}
			</div>
		</>
	);
};

CardBody.propTypes = {
	title: PropTypes.string,
	cardPath: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string
};

Cards.propTypes = {
	obj: PropTypes.array,
	cardPath: PropTypes.string,
	deckPath: PropTypes.string,
	title: PropTypes.string,
	heading: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string,
	n: PropTypes.number
};
