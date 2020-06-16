import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import {NotFound} from './errors';
import Writer from './Writer';

function Writers({ match: { url }, writers }) {
    return (
        <Fragment>
            <ul>
                {writers.map(({ id, name }) => <li key={id}> <Link to={`${url}/${id}`}> {name}</Link></li>)}

            </ul>
            <Route path={url} exact render={() => <h3>Please select a writer from above</h3>} />
            <Route path={`${url}/:writerId`} render={props => {
                const writer = writers.find(writer => writer.id === props.match.params.writerId);
                if (!writer) {
                    // return <Redirect to="/404" />
                    // return <h3>Writer Not Found</h3>
                    return <NotFound />
                }

                return <Writer {...props} {...writer} />
            }
            } />

        </Fragment>
    )
}

export default Writers
