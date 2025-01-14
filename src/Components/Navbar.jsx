import SearchBar from "./SearchBar";
import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <h1>Seller Dashboard</h1>
                    <ul className="navbar-menu">
                        <li className="navbar-item"><a href="#home">HOME</a></li>
                        <li className="navbar-item"><a href="#about">ABOUT</a></li>
                        <li className="navbar-item"><a href="#pricing">PRICING</a></li>
                        <li className="navbar-item"><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
