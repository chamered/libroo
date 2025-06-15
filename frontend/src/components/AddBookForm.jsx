import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Plus } from 'lucide-react';

function AddBookForm({ onSave }) {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        resetForm();
        setValidated(false);
    };

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState(1);
    const [rating, setRating] = useState(0);
    const [notes, setNotes] = useState("");

    const resetForm = () => {
        setTitle("");
        setAuthor("");
        setStatus(1);
        setRating(0);
        setNotes("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        const newBook = {
            title,
            author,
            status: Number(status),
            rating: Number(rating),
            notes,
        };

        fetch("http://localhost:3001/dashboard", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBook),
        })
            .then(res => {
                if (!res.ok) throw new Error("Error during saving");
                return res.json();
            })
            .then(data => {
                onSave(data);
                handleClose();
            })
            .catch(err => {
                console.error(err);
                alert("Error during book saving");
            });
    };

    return (
        <>
            <Button variant="primary" className="btn btn-primary d-flex" onClick={handleShow}>
                <Plus className="me-1" />Add Book
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header data-bs-theme="dark" className="bg-primary text-white" closeButton>
                    <Modal.Title>Add a New Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className={`row needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
                        <div className="col-12 mt-3">
                            <label htmlFor="title" className="form-label">Book Title *</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="The 100"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <div className="invalid-feedback">
                                Please provide a book title.
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="author" className="form-label">Author *</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="author"
                                placeholder="Kass Morgan"
                                value={author}
                                onChange={e => setAuthor(e.target.value)}
                            />
                            <div className="invalid-feedback">
                                Please provide the author's name.
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="readingStatus" className="form-label">Reading Status</label>
                            <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
                                <option value="1">To Read</option>
                                <option value="2">Reading</option>
                                <option value="3">Read</option>
                            </select>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="rating" className="form-label d-block">Rating</label>
                            <select className="form-select" value={rating} onChange={e => setRating(e.target.value)}>
                                <option value="0">No rating</option>
                                <option value="1">&#8902;</option>
                                <option value="2">&#8902; &#8902;</option>
                                <option value="3">&#8902; &#8902; &#8902;</option>
                                <option value="4">&#8902; &#8902; &#8902; &#8902;</option>
                                <option value="5">&#8902; &#8902; &#8902; &#8902; &#8902;</option>
                            </select>
                        </div>
                        <div className="col-12 my-3">
                            <label htmlFor="notes" className="form-label">Notes (Optional)</label>
                            <textarea
                                className="form-control"
                                rows={3}
                                placeholder="A tense, post-apocalyptic survival story."
                                value={notes}
                                onChange={e => setNotes(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="btn-group mb-3" role="group">
                            <button type="button" className="btn btn-outline-dark" onClick={handleClose}>Cancel</button>
                            <button type="submit" className="btn btn-outline-primary">Save Book</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddBookForm;