import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav class="navbar">
            {/*Ethnus on left
                Home About Blog Contact on right */}
                <Link to="/" class="navbar-brand"></Link>
                <div class="nav">
                    <Link to="/about" class="nav-link">About</Link>
                    <Link to="/contact" class="nav-link">Contact</Link>
                    <Link to="/project" class="nav-link">Project</Link>
                </div>
        </nav>
    )
}
export default Nav;