import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import starWarsImg from "../../img/starWars.png";

const CardBody = props => {
	return (
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">{props.content}</p>
		</div>
	);
};

const CardFooter = () => {
	return (
		<div className="card-footer">
			<small className="text-muted">♡</small>
		</div>
	);
};

export const Card = props => {
	return (
		<div className="card">
			<img src={props.src} />
			<CardBody title={props.title} content={props.content} style={{ witdh: "8rem" }} />
			<CardFooter />
		</div>
	);
};

CardBody.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string
};

Card.propTypes = {
	src: PropTypes.string,
	title: CardBody.propTypes.title,
	content: CardBody.propTypes.content
};
