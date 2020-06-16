import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from './errors'
import Text from './Text'
// import { useParams } from 'react-router-dom';

function Writer({ match: { url }, name, born, description, image, texts }) {
    // let { writerId } = useParams();
    return (
        <Fragment>
            <h1>{name}</h1>
            <img src={image} alt={name} style={{ maxWidth: 300 }} />
            <h3>{born}</h3>
            <p>{description}</p>
            <ul>
                {texts.map(({ id, title }) => <li key={id}> <Link to={`${url}/texts/${id}`} >{title} </Link> </li>)}
            </ul>

            <Route path = {`${url}/texts/:textId`} render = {
                props => {
                    const text = texts.find(text => text.id === props.match.params.textId)
                    if(!text){
                        return  <NotFound />
                    }
                    return <Text {...text} />
                }
            }/>
        </Fragment>
    )
}

export default Writer
