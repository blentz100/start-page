import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';
import Clock from 'react-live-clock';
import Card from 'react-bootstrap/Card'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
//import beach from '../src/images/beach.jpg'

function App() {
  return (

	  <div>	
	  <div>
 <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Git Commands</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
	  </div>




    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
		<Card style={{ width: '8rem' }}> 
			<Card.Body> 
				<Card.Title className="card-title">Pacific</Card.Title>
				<Card.Text>
					<Clock format={'hh:mm:ss:a'} ticking={true} timezone={'US/Pacific'} />
				</Card.Text>
			</Card.Body>
		  <ListGroup className="list-group-flush">
			<ListGroupItem>Sierra</ListGroupItem>
			<ListGroupItem>El Camino</ListGroupItem>
			<ListGroupItem>CSN Nevada</ListGroupItem>
		  </ListGroup>
		</Card>
		<Card border="primary" style={{ width: '8rem' }}> 
			<Card.Body> 
				<Card.Title className="card-title">Mountain</Card.Title>
				<Card.Text>
					<Clock format={'hh:mm:ss:a'} ticking={true} timezone={'US/Mountain'} />
				</Card.Text>
			</Card.Body>
		  <ListGroup className="list-group-flush">
			<ListGroupItem>CEI </ListGroupItem>
			<ListGroupItem>MCCCD </ListGroupItem>
			<ListGroupItem>Missoula </ListGroupItem>
			<ListGroupItem>Idaho State </ListGroupItem>
			<ListGroupItem>Arapahoe</ListGroupItem>
		  </ListGroup>
		</Card>
		<Card style={{ width: '8rem' }}> 
			<Card.Body> 
				<Card.Title className="card-title">Central</Card.Title>
				<Card.Text>
					<Clock format={'hh:mm:ss:a'} ticking={true} timezone={'US/Central'} />
				</Card.Text>
			</Card.Body>
		  <ListGroup className="list-group-flush">
			<ListGroupItem>Southeastern</ListGroupItem>
		  </ListGroup>
		</Card>
		<Card style={{ width: '8rem' }}> 
			<Card.Body> 
				<Card.Title className="card-title">Eastern</Card.Title>
				<Card.Text>
					<Clock format={'hh:mm:ss:a'} ticking={true} timezone={'US/Eastern'} />
				</Card.Text>
			</Card.Body>
		  <ListGroup className="list-group-flush">
			<ListGroupItem>CCWA </ListGroupItem>
			<ListGroupItem>Nashua</ListGroupItem>
		  </ListGroup>
		</Card>


	</div>

     <pre>{`
echo "# test333" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yourusernamehere/yourreponame.git
git push -u origin main
          `}</pre>
  </div>
  );
}

export default App;
