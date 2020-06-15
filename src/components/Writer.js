import React, { Fragment } from 'react'
// import { useParams } from 'react-router-dom';

function Writer({ name, born, description, image }) {
    // let { writerId } = useParams();
    return (
        <Fragment>
            <h1>{name}</h1>
            <img src={image} alt={name} style={{ maxWidth: 300 }} />
            <h3>{born}</h3>
            <p>{description}</p>
        </Fragment>
    )
}

export default Writer
