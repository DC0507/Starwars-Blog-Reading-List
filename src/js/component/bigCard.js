import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import starWarsImg from "../../img/starWars.png";

const BigCardBody = props => {
	return (
		<>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					<ul />
				</p>
				<p className="card-text">
					<small className="text-muted">Last updated 3 mins ago</small>
				</p>
			</div>
		</>
	);
};

const BigCard = props => {
	return (
		<div className="card mb-3">
			<BigCardBody title={props.title} />
		</div>
	);
};

BigCardBody.propTypes = {
	title: PropTypes.string
};

BigCard.propTypes = {
	title: PropTypes.string
};

const CardBody = props => {
	return (
		<>
			<img src="https://fakeimg.pl/350x200/" className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
			</div>
		</>
	);
};

const CardFooter = () => {
	return (
		<div className="card-footer">
			<small className="text-info" style={{ fontSize: "20pt" }}>
				♡
			</small>
		</div>
	);
};

export const Cards = props => {
	return (
		<>
			<Link to={props.path} style={{ textDecoration: "none" }}>
				<h1 className="text-center" style={{ textShadow: "2px 2px black", color: "silver" }}>
					{props.heading}
				</h1>
			</Link>
			<div className="card-deck my-5">
				{props.obj.map((item, i) => {
					if (i < props.n) {
						return (
							<div key={i} className="card bg-secondary col-4">
								<Link to={props.path} style={{ textDecoration: "none", color: "white" }}>
									<CardBody title={item.name} />
								</Link>
								<CardFooter />
							</div>
						);
					}
				})}
			</div>
		</>
	);
};

CardBody.propTypes = {
	title: PropTypes.string
};

Cards.propTypes = {
	obj: PropTypes.array,
	path: PropTypes.string,
	title: PropTypes.string,
	heading: PropTypes.string,
	n: PropTypes.number
};
