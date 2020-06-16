import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {NotFound} from './errors';
import Writers from './Writers';






export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      writers: []
    }
  }


  componentDidMount() {
    axios('http://localhost:3004/writers?_embed=texts')
      .then(response => {
        this.setState({ writers: response.data });
      })
      .catch(err => {
        console.log(err);

      })


  }

  render() {

    const { writers } = this.state;
    return (
      <Router>
        <Fragment>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/writers">Writers</Link></li>
          </ul>
          <hr />

          <Switch>
            <Route path="/" exact render={() => <div>Home Page</div>} />
            <Route path="/writers" render={props => <Writers {...props} writers={writers} />} />
            <Route component={ NotFound} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}


