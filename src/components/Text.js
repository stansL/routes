import React, { Fragment } from 'react'

function Text({ title, published, description }) {
    return (
        <Fragment>
            <h4>
                {title} {published ? `(${published})` : ""}
            </h4>
            <p>{description ? description : <i>No Description</i>} </p>

        </Fragment>
    )
}

export default Text
