import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.planets.map((item, index) => {
				return <li key={index}>{item.name}</li>;
			})}
		</div>
	);
};
