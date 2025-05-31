import { useState } from "react";

function EditBookForm({book, onCancel, onUpdate}) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [status, setStatus] = useState(book.status);
    const [rating, setRating] = useState(book.rating);
    const [notes, setNotes] = useState(book.notes);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedBook = {
            ...book,
            title,
            author,
            status: Number(status),
            rating: Number(rating),
            notes,
        };

        // Change the link with "http://localhost:3001/dashboard/${book.id}" if you run the backend locally
        fetch(`https://libroo.onrender.com/dashboard/${book.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedBook),
        })
            .then(res => {
                if (!res.ok) throw new Error("Failed to update book");
                return res.json();
            })
            .then(onUpdate)
            .catch(err => {
                console.error(err);
                alert("Error updating book");
            });
    }

    return(
        <div className="card position-fixed top-50 start-50" style={{translate: "-50% -50%"}}>
            <div className="card-header">
                <h5 className="card-title mb-0 py-2">Edit Book</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-12 mt-3">
                            <label htmlFor="title" className="form-label">Book Title</label>
                            <input type="text" className="form-control" placeholder="The 100" value={book.title} disabled/>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" className="form-control" placeholder="Kass Morgan" value={book.author} disabled/>
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
                            <textarea className="form-control" rows={3} placeholder="A tense, post-apocalyptic survival story." value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3 d-flex justify-content-end">
                            <button type="button" className="btn btn-outline-dark me-2" onClick={onCancel}>Cancel</button>
                            <button type="submit" className="btn btn-primary">Save Book</button>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    );
}

export default EditBookForm;