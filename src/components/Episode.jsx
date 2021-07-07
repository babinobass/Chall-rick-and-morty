import { useParams } from "react-router-dom"
import { queryEpisode } from "./functions"
import { useQuery } from "@apollo/client";
import Card from "./Card"

import "./Modal.css"

const Episode = () => {
    const { idEpisode } = useParams()
    const { loading, error, data } = useQuery(queryEpisode(idEpisode));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { name, air_date, characters } = data.episode
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Episode: {name}</h1>
            <h2>Date: {air_date}</h2>
            <h2>Characters</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {characters.map(res => <Card key={res.id} name={res.name} status={res.status} image={res.image} />)}
            </div>
        </div>
    )
}

export default Episode