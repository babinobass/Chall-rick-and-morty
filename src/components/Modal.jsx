import { Link } from "react-router-dom"
import "./Modal.css"


const ModalEpisodes = ({ episode, isDisplay }) => {
    console.log(episode)
    return (
        <div className="M-container">
            <div className="M-subContainer" onClick={() => isDisplay(false)}>
                <div className="modal">
                    <button className="x" onClick={() => isDisplay(false)}>X</button>
                    <p>Episodes</p>
                    {episode.map(arr => {
                        return (
                            <Link to={`/episode/${arr.id}`} >
                                <p>{arr.id}: {arr.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ModalEpisodes