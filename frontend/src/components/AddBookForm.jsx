import { useState } from "react";

function AddBookForm({onCancel, onSave}) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState(1);
    const [rating, setRating] = useState(0);
    const [notes, setNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            title,
            author,
            status: Number(status),
            rating: Number(rating),
            notes,
        };

        fetch("http://localhost:3001/dashboard", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBook),
        })
            .then(res => {
                if (!res.ok) throw new Error("Error during saving");
                return res.json();
            })
            .then(data => {
                onSave(data);
            })
            .catch(err => {
                console.error(err);
                alert("Error during book saving");
            });
    }

    return(
        <div className="card position-fixed top-50 start-50" style={{translate: "-50% -50%"}}>
            <div className="card-header">
                <h5 className="card-title mb-0 py-2">Add New Book</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-12 mt-3">
                            <label htmlFor="title" className="form-label">Book Title *</label>
                            <input type="text" className="form-control" placeholder="The 100" value={title} onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="author" className="form-label">Author *</label>
                            <input type="text" className="form-control" placeholder="Kass Morgan" value={author} onChange={e => setAuthor(e.target.value)}/>
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

export default AddBookForm;