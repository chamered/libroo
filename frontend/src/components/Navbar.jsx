import { Link, useLocation } from 'react-router-dom';
import { SquareLibrary } from 'lucide-react'

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold d-flex align-items-center" to="/"><SquareLibrary className="text-primary" size={32}/>Libroo</Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link className={`nav-link ${currentPath === "/" ? "active fw-medium" : ""}`} to="/">Home</Link>
                        <Link className={`nav-link ${currentPath === "/dashboard" ? "active fw-medium" : ""}`} to="/dashboard">Dashboard</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;