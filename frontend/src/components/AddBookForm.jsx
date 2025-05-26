function AddBookForm({onCancel}) {

    return(
        <div className="card position-fixed top-50 start-50" style={{translate: "-50% -50%"}}>
            <div className="card-header">
                <h5 className="card-title mb-0 py-2">Add New Book</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <form className="row">
                        <div className="col-12 mt-3">
                            <label htmlFor="bookTitle" className="form-label">Book Title *</label>
                            <input type="text" className="form-control" placeholder="The 100"/>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="author" className="form-label">Author *</label>
                            <input type="text" className="form-control" placeholder="Kass Morgan"/>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="readingStatus" className="form-label">Reading Status</label>
                            <select className="form-select" defaultValue={3}>
                                <option value="1">Read</option>
                                <option value="2">Reading</option>
                                <option value="3">To Read</option>
                            </select>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="rating" className="form-label d-block">Rating</label>
                            <select className="form-select" defaultValue={0}>
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
                            <textarea className="form-control" rows={3} placeholder="A tense, post-apocalyptic survival story."></textarea>
                        </div>
                    </form>
                </li>
                <li className="list-group-item d-flex justify-content-end">
                    <button className="btn btn-outline-dark me-2" onClick={onCancel}>Cancel</button>
                    <button className="btn btn-primary">Save Book</button>
                </li>
            </ul>
        </div>
    );
}

export default AddBookForm;