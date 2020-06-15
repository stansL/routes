import React, { Fragment } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import Writer from './Writer'

function Writers({ match: { url }, writers }) {
    return (
        <Fragment>
            <ul>
                {writers.map(({ id, name }) => <li key={id}> <Link to={`${url}/${id}`}> {name}</Link></li>)}

            </ul>
            <Route path={url} exact render={() => <h3>Please select a writer from above</h3>} />
            <Route path={`${url}/:writerId`} render={({ match }) => {
                const writer = writers.find(writer => writer.id === match.params.writerId);
                if (!writer) {
                    return <Redirect to="/404" />
                }

                return <Writer {...writer} />
            }
            } />

        </Fragment>
    )
}

export default Writers
