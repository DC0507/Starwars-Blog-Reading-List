import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";
import { Character } from "./views/character";
import { Planet } from "./views/planet";
import { Vehicle } from "./views/vehicle";
import injectContext from "./store/appContext";
import { Navba_r } from "./component/navbar";
import { Footer } from "./component/footer";
import { FavList } from "./component/favList";
import { Container, Row, Col } from "react-bootstrap";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navba_r />
					<Container fluid>
						<Row>
							<Col md={2}>
								<FavList />
							</Col>
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/characters">
									<Characters />
								</Route>
								<Route exact path="/planets">
									<Planets />
								</Route>
								<Route exact path="/vehicles">
									<Vehicles />
								</Route>
								<Route exact path="/character/:theid">
									<Character />
								</Route>
								<Route exact path="/planet/:theid">
									<Planet />
								</Route>
								<Route exact path="/vehicle/:theid">
									<Vehicle />
								</Route>
								<Route>
									<h1>Not found!</h1>
								</Route>
							</Switch>
						</Row>
					</Container>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
