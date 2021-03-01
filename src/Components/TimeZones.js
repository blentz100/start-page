import React from 'react';
import Clock from 'react-live-clock';
import Card from 'react-bootstrap/Card'
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const TimeZones = () => {
	return ( 
		<div >
			<h2> TimeZones</h2>

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




		</div>
	);
}
export default TimeZones;
