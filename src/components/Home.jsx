import * as React from "react"
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { queryCharacter } from "./functions"
import { useQuery } from "@apollo/client";
import Card from "./Card";

const Home = () => {
    const { name, pages, id } = useParams()
    const [page, setPage] = useState(pages ?? id ?? 1)
    const filter = name ? `filter: { name: "${name}" }` : ""

    const { loading, error, data } = useQuery(queryCharacter(page, filter));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div className="home" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {
                data?.characters.results.map(({ id, name, image, status, species, location, episode }) => (
                    <Card key={id} id={id} name={name} image={image} status={status} species={species} location={location} episode={episode} />
                ))
            }
            <div>
                <Link to={name ? `/character/${name}/${parseInt(pages) - 1}` : `/page/${parseInt(page) - 1}`}>
                    <button onClick={() => setPage(parseInt(page) - 1)}
                        disabled={page === 1 || pages === 1}>Anterior</button>
                </Link>
                <Link to={name ? `/character/${name}/${parseInt(pages) + 1}` : `/page/${parseInt(page) + 1}`}>
                    <button onClick={() => setPage(parseInt(page) + 1)}
                        disabled={!data?.characters.results[19]}>Siguiente</button>
                </Link>
            </div>
        </div>
    )

}

export default Home