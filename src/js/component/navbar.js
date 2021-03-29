import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsImg from "../../img/starWars.png";
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navba_r = () => {
	const { store } = useContext(Context);

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<img src={starWarsImg} style={{ width: "15%" }} />
			</Navbar.Brand>
			<Nav className="mr-auto">
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
					<Dropdown.Toggle variant="warning" id="dropdown-basic">
						{`Favorites (${store.favorites.length})`}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Header>Dropdown header</Dropdown.Header>
						{store.favorites.map((item, i) => {
							return (
								<Dropdown.Item href="#/action-1" key={i}>
									{item}
									<i className="fas fa-trash" />
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	);
};
