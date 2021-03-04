import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './../App.css';

export default class App extends Component {
  render() {
    return (

<Container fluid className="container">
        <Header as='h2'>Pushups Tracker</Header>
        <Form className="form">
          <Form.Field>
            <label>Date</label>
            <input placeholder='Todays Date' />
          </Form.Field>
          <Form.Field>
            <label>Number of Pushups</label>
            <input placeholder='22?' />
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
	<br/>	
	<a href ="https://docs.google.com/spreadsheets/d/1JxTrYTtesCj7o7YgG-H4jFAOpWpvZYc93USXO6DlvL8/edit#gid=0">pushups spreadsheet</a>
		<Header as='h5'>Courtesy of https://www.freecodecamp.org/news/react-and-googlesheets/</Header>
      </Container>
	)
  }
}
