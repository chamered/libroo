import { SquarePen } from 'lucide-react'
import { Trash2 } from 'lucide-react'

function BookCard({book}) {
    const badgeText = {
        1: "To Read",
        2: "Reading",
        3: "Read"
    }

    const badgeColor = {
        1: "text-bg-secondary",
        2: "text-bg-warning",
        3: "text-bg-success"
    }

    return(
        <div className="col-12 col-md-4 mt-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title mb-0 d-inline">{book.title}</h5>
                    <span className={`badge ${badgeColor[book.status]} position-absolute end-0 me-3`}>{badgeText[book.status]}</span>
                    <p className="text-secondary mb-0"><small>by {book.author}</small></p>
                    <div className="my-3">
                        <select className="form-select" defaultValue={book.rating} disabled>
                            <option value="0">No rating</option>
                            <option value="1">&#8902;</option>
                            <option value="2">&#8902; &#8902;</option>
                            <option value="3">&#8902; &#8902; &#8902;</option>
                            <option value="4">&#8902; &#8902; &#8902; &#8902;</option>
                            <option value="5">&#8902; &#8902; &#8902; &#8902; &#8902;</option>
                        </select>
                    </div>
                    <p className="fw-bold mb-0">Notes:</p>
                    <p className="card-text text-secondary">{book.notes}</p>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-light border border-1 me-2"><SquarePen className="text-secondary"/></button>
                        <button className="btn btn-light border border-1"><Trash2 className="text-danger"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;