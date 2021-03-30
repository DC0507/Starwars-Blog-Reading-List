const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			favorites: [],
			favCharacters: [],
			favPlanets: [],
			favVehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
			},

			getPeople: () => {
				fetch("https://swapi.dev/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }))
					.catch(err => console.error(err));
			},

			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err));
			},

			setFavorites: name => {
				const store = getStore();
				if (!store.favorites.includes(name)) {
					setStore({ favorites: [...store.favorites, name] });
				} else {
					null;
				}
			},

			deleteFavorites: async index => {
				const store = getStore();
				const newFavorites = store.favorites.filter((_, i) => i != index);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
