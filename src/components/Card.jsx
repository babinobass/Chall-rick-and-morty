import * as React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import ModalEpisodes from "./Modal"

import "./Card.css"

const Card = ({ name, image, status, species, location, episode }) => {
    const [isDisplay, setIsDisplay] = useState(false)

    return (
        <div className="card" >
            <img alt="" src={image} />
            <p> Name: {name}</p>
            <p>Status: {status}</p>
            {species ? <p>Species: {species}</p> : null}
            {episode ? <p className="listBtn" onClick={() => setIsDisplay(true)}>List of episodes</p> : null}
            {isDisplay ? <ModalEpisodes episode={episode} isDisplay={setIsDisplay} /> : null}
            {location ?
                <Link to={`/location/${location.id}`}>
                   Location: {location.name}
                </Link>
                : null
            }
        </div>
    )
}

export default Card