function Navbar() {
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="/">Libroo</a>
                <div>
                    <button className="btn btn-outline-primary me-2">Login</button>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;