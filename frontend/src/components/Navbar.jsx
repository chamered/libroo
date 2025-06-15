import { Link, useLocation } from 'react-router-dom';
import { SquareLibrary } from 'lucide-react'

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return(
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold d-flex align-items-center" to="/"><SquareLibrary className="text-primary" size={32}/>Libroo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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