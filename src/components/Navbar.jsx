import { useState } from "react"
import { Link } from "react-router-dom"
import './Navbar.css'


const Navbar = () => {
    const [submit, setSubmit] = useState("")

    return (
        <header className="header">
            <Link to="/">
               HOME
            </Link>
            <div>
                <form >
                    <label>
                        Name:
                        <input type="text" name="name" value={submit} onChange={e => setSubmit(e.target.value)} />
                    </label>
                    <Link to={`/character/${submit}/1`} >
                        <button disabled={submit === ""} onClick={() => setSubmit("")}>submit</button>
                    </Link>
                </form>
            </div>
        </header>
    )
}

export default Navbar