const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			favorites: []
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
			},

			setFavorites: name => {
				const store = getStore();
				if (!store.favorites.includes(name)) {
					setStore({ favorites: [...store.favorites, name] });
				} else {
					null;
				}
			},

			deleteFavorites: name => {
				const store = getStore();
				setStore({ favorites: [store.favorites.filter(item => item != name)] });
			}
		}
	};
};

export default getState;
