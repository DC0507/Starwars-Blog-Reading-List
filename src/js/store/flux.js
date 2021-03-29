import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			uidPeople: ""
		},
		actions: {
			// Use getActions to call a function within a fuction

			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
			},

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err));
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
