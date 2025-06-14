import { useState, useEffect } from "react";
import Tab from "../components/Tab";
import AddBookForm from "../components/AddBookForm";
import EditBookForm from "../components/EditBookForm";
import { BookCopy, BookText, BookCheck, BookPlus } from 'lucide-react'

function Dashboard() {
    const [activeTab, setActiveTab] = useState("all-books")
    const [showAddBookForm, setShowAddBookForm] = useState(false);
    const [books, setBooks] = useState([]);
    const [bookToEdit, setBookToEdit] = useState(null);

    useEffect(() => {
        // Change the link with "http://localhost:3001/dashboard" if you run the backend locally
        fetch("http://localhost:3001/dashboard")
            .then(res => res.json())
            .then(setBooks)
            .catch(err => console.error("Error in fetch: ", err));
    }, []);

    const handleSaveBook = (newBook) => {
        setBooks(prev => [...prev, newBook]);
    }

    const handleDeleteBook = (bookID) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (!confirmDelete) return;

        // Change the link with "http://localhost:3001/dashboard/${bookID}" if you run the backend locally
        fetch(`http://localhost:3001/dashboard/${bookID}`, {
            method: "DELETE",
        })
            .then(res => {
                if (!res.ok) throw new Error("Failed to delete book");
                setBooks(prevBooks => prevBooks.filter(book => book.id !== bookID));
            })
            .catch(err => {
                console.error(err);
                alert("Error deleting book");
            });
    }

    const handleUpdateBook = (updatedBook) => {
        setBooks(prev => prev.map(book => (book.id === updatedBook.id ? updatedBook : book)))
        setBookToEdit(null);
    }

    const renderTabContent = () => {
        return <Tab tab={activeTab} books={books} onDelete={handleDeleteBook} onEdit={(book) => setBookToEdit(book)}/>
    }

    return(
        <div className="container mt-4">
            <div className="d-flex justify-content-between">
                <div>
                    <h1 className="fw-bold mb-0">My Books</h1>
                    <p className="fw-light text-secondary">Track your reading journey</p>
                </div>
                <div className="d-flex align-items-center">
                    <AddBookForm onSave={handleSaveBook}/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-6 col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h6 className="card-title text-secondary d-flex align-items-center"><BookCopy className="text-primary me-1"/>Total Books</h6>
                            <h2 className="fw-bold">{books.length}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h6 className="card-title text-secondary d-flex align-items-center"><BookText className="text-warning me-1"/>Currently Reading</h6>
                            <h2 className="fw-bold">{books.filter(book => book.status === 2).length}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-4 mt-md-0 col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h6 className="card-title text-secondary d-flex align-items-center"><BookCheck className="text-success me-1"/>Completed</h6>
                            <h2 className="fw-bold">{books.filter(book => book.status === 3).length}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-4 mt-md-0 col-md-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h6 className="card-title text-secondary d-flex align-items-center"><BookPlus className="me-1"/>To Read</h6>
                            <h2 className="fw-bold">{books.filter(book => book.status === 1).length}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === "all-books" ? "active" : ""}`}
                        href="#"
                        onClick={() => setActiveTab("all-books")}
                    >
                        All Books
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === "to-read" ? "active" : ""}`}
                        href="#"
                        onClick={() => setActiveTab("to-read")}
                    >
                        To Read
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === "reading" ? "active" : ""}`}
                        href="#"
                        onClick={() => setActiveTab("reading")}
                    >
                        Reading
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === "read" ? "active" : ""}`}
                        href="#"
                        onClick={() => setActiveTab("read")}
                    >
                        Read
                    </a>
                </li>
            </ul>
            <div>
                {renderTabContent()}
            </div>
            {bookToEdit && <EditBookForm book={bookToEdit} onCancel={() => setBookToEdit(null)} onUpdate={handleUpdateBook}/>}
        </div>
    );
}

export default Dashboard;