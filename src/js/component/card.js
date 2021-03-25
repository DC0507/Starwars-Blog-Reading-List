import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import starWarsImg from "../../img/starWars.png";

const CardBody = props => {
	return (
		<>
			<img src={props.src} />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
			</div>
		</>
	);
};

const CardFooter = () => {
	return (
		<div className="card-footer">
			<small className="text-muted">♡</small>
		</div>
	);
};
const Cards = props => {
	props.obj.map((item, i) => {
		return (
			<div key={i} className="card">
				<Link to={props.path}>
					<CardBody title={item.name} src={props.src} />
				</Link>
				<CardFooter />
			</div>
		);
	});
};

export const CardDeck = props => {
	return (
		<div className="card-deck my-5">
			<Cards obj={props.obj} to={props.path} src={props.src} />
		</div>
	);
};

CardBody.propTypes = {
	src: PropTypes.string,
	title: PropTypes.string
};

Cards.propTypes = {
	obj: PropTypes.object,
	path: PropTypes.string,
	src: CardBody.src,
	title: CardBody.title
};

CardDeck.propTypes = {
	obj: Cards.obj,
	path: Cards.path,
	src: CardBody.src,
	title: CardBody.title
};
