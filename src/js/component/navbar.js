import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsImg from "../../img/starWars.png";
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navba_r = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar className="mb-5" bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<img src={starWarsImg} style={{ width: "20%" }} />
			</Navbar.Brand>
			<Nav className="mr-auto" style={{ fontSize: "20pt" }}>
				<Nav.Link>
					<Link className="text-warning" to="/" style={{ textDecoration: "none" }}>
						Home
					</Link>
				</Nav.Link>
				<Nav.Link>
					<Link className="text-white" to="/characters" style={{ textDecoration: "none" }}>
						Characters
					</Link>
				</Nav.Link>
				<Nav.Link>
					<Link className="text-white" to="/planets" style={{ textDecoration: "none" }}>
						Planets
					</Link>
				</Nav.Link>
				<Nav.Link>
					<Link className="text-white" to="/vehicles" style={{ textDecoration: "none" }}>
						Vehicles
					</Link>
				</Nav.Link>
				<Dropdown className="ml-3">
					<Dropdown.Toggle variant="warning" id="dropdown-basic" style={{ fontSize: "18pt" }}>
						{`Favorites (${store.favorites.length})`}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorites.length == 0 ? <Dropdown.Header>Empty</Dropdown.Header> : null}
						{store.favorites.map((item, i) => {
							return (
								<Dropdown.Item href="#/action-1" key={i} active>
									<b>{item}</b>
									<i onClick={() => actions.deleteFavorites(i)} className="fas fa-trash" />
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
			</Nav>
			<Form inline>
				{/*no functionality...yet*/}
				<FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ fontSize: "18pt" }} />
				<Button variant="outline-info" style={{ fontSize: "18pt" }}>
					Search
				</Button>
			</Form>
		</Navbar>
	);
};
