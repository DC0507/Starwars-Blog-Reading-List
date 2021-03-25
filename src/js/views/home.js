import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center py-5">
			<div className="card-deck">
				{store.planets.map((item, index) => {
					return (
						<Card
							onClick={actions.getInfo(item.url)}
							key={index}
							title={item.name}
							src="https://fakeimg.pl/440x320/"
						/>
					);
				})}
			</div>
			<div className="card-deck my-5">
				{store.people.map((item, index) => {
					return <Card key={index} title={item.name} src="https://fakeimg.pl/440x320/" />;
				})}
			</div>
		</div>
	);
};
