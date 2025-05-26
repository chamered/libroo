import Footer from '../components/Footer';
import { NotebookText } from 'lucide-react'
import { Star } from 'lucide-react'
import { Clock } from 'lucide-react'

function Home() {
    return(
        <>
            <div className="text-white text-center bg-primary bg-gradient py-5">
                <h1 className="fw-bold">Track Your Reading Journey</h1>
                <p className="fw-light">
                    Organize your personal library, set reading goals, and discover your next favorite book. <br/>
                    Keep track of what you've read, what you're reading, and what's next on your list.
                </p>
                <div className="text-center">
                    <button className="btn btn-light text-primary me-2">Get Started Free</button>
                    <button className="btn btn-outline-light">Learn More</button>
                </div>
            </div>

            <div id="features" className="text-center bg-light py-5">
                <h3 className="fw-bold">Everything You Need to Track Your Reading</h3>
                <p className="text-secondary fw-light">
                    Simple, powerful tools to help you organize your books and achieve your reading goals.
                </p>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <NotebookText className="mt-2 text-primary" size={32} />
                                    <h5 className="card-title mt-3">Organize Your Library</h5>
                                    <p className="card-text text-secondary">
                                        <small>
                                            Keep track of all your books in one place. Categorize by status: to read,
                                            currently reading, or completed.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-2 mt-md-0">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <Star className="mt-2 text-warning" size={32} />
                                    <h5 className="card-title mt-3">Rate & Review</h5>
                                    <p className="card-text text-secondary">
                                        <small>
                                            Rate your books with a 5-star system and add personal notes to
                                            remember what you loved about each book.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-2 mt-md-0">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <Clock className="mt-2 text-success" size={32} />
                                    <h5 className="card-title mt-3">Track Progress</h5>
                                    <p className="card-text text-secondary">
                                        <small>
                                            Monitor your reading progress and see how many books you've completed over time.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="how-it-works" className="text-center py-5">
                <h3 className="fw-bold">How It Works</h3>
                <p className="text-secondary fw-light">
                    Get started with Libroo in just a few simple steps.
                </p>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h1 className="mb-4 text-primary fw-bold">1</h1>
                            <h5>Create Your Account</h5>
                            <p className="text-secondary">
                                <small>
                                    Sign up for free and create your personal <br/>
                                    BookTracker account in seconds.
                                </small>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 mt-2 mt-md-0">
                            <h1 className="mb-4 text-primary fw-bold">2</h1>
                            <h5>Add Your Books</h5>
                            <p className="text-secondary">
                                <small>
                                    Start adding books to your library with title, <br/>
                                    author, and reading status.
                                </small>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 mt-2 mt-md-0">
                            <h1 className="mb-4 text-primary fw-bold">3</h1>
                            <h5>Track & Enjoy</h5>
                            <p className="text-secondary">
                                <small>
                                    Update your progress, rate books, and <br/>
                                    watch your reading journey unfold.
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="stats" className="text-center bg-light py-5">
                <h3 className="fw-bold">Join Hundreds of Happy Readers</h3>
                <p className="text-secondary fw-light">
                    Libroo helps readers around the world organize their libraries and achieve their reading goals.
                </p>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h1 className="text-primary fw-bold">1000+</h1>
                            <h5>Active Users</h5>
                            <p className="text-secondary">
                                <small>
                                    Readers tracking their books
                                </small>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 mt-2 mt-md-0">
                            <h1 className="text-primary fw-bold">500+</h1>
                            <h5>Books Tracked</h5>
                            <p className="text-secondary">
                                <small>
                                    Books added to libraries
                                </small>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 mt-2 mt-md-0">
                            <h1 className="text-primary fw-bold">300+</h1>
                            <h5>Books Completed</h5>
                            <p className="text-secondary">
                                <small>
                                    Reading goals achieved
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Home;