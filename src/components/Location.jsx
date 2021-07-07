import * as React from "react"
import { useParams } from "react-router-dom";
import Card from "./Card";
import { useQuery } from "@apollo/client";
import { queryLocation } from "./functions"

const Location = () => {
    const { idLocation } = useParams()
    const { loading, error, data } = useQuery(queryLocation(idLocation));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { name, type, dimension, residents } = data?.location
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>{name}</h1>
            <h2>Type: {type}</h2>
            <h2>Dimension: {dimension}</h2>
            <h2>Residents</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {residents?.map((res) => <Card key={res.id} name={res.name} status={res.status} image={res.image} />)}
            </div>
        </div>
    )
}

export default Location;