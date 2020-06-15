import React from 'react'
import { useRouteMatch, Link, Route, Switch } from 'react-router-dom'
import Topic from './Topic';

function Topics() {

    let match = useRouteMatch();
    return (
        <div>
            
            <h2>Topics</h2>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
            <Link to={`${match.url}/components`}>Components</Link> |
            <Link to={`${match.url}/props-v-state`}>
                Props v. State
          </Link>

            
        </div>
    )
}

export default Topics
