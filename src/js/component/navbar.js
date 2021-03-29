import React from "react";
import { Link } from "react-router-dom";
import starWarsImg from "../../img/starWars.png";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export const Navba_r = () => {
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
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	);
};
