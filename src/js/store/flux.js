import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			movieElement: [],
			planets: [],
			people: []
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
			}

			/*getInfo: url => {
				fetch(url)
					.then(res => res.json())
					.then(data => {
						setStore({ movieElement: data.result.properties });
						console.log(data.result.properties);
					})
					.catch(err => console.error(err));
			}*/
		}
	};
};

export default getState;
