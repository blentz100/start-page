import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Home from './Components/Home';
import TimeZones from './Components/TimeZones';
import Git from './Components/Git';
import Pushups from './Components/Pushups';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function App() {
  return (
	<div>
		<Router>
			<Navbar bg="primary" variant="dark">
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
							<Nav.Link href="/Home">
								 Home 
							</Nav.Link>
							<Nav.Link href="/TimeZones">Time Zones</Nav.Link>
							<Nav.Link href="/Git">Git Commands</Nav.Link>
							<Nav.Link href="https://tmuxcheatsheet.com/">Tmux </Nav.Link>
							<Nav.Link href="/Pushups">Pushups</Nav.Link>
					</Nav>
			</Navbar>
					<Switch>
						<Route path='/Home'>
							<Home />
						</Route>
						<Route path='/TimeZones'>
							<TimeZones/>
						</Route>
						<Route path='/Pushups'>
							<Pushups/>
						</Route>
						<Route path='/Git'>
							<Git/>
						</Route>
					</Switch>
		</Router>



  </div>
  );
}

export default App;
