import { useEffect, useState } from 'react';
import BookCard from './BookCard';

function Tab({tab}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/dashboard")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.error("Error in fetch: ", err));
    }, []);

    const filteredBooks = books.filter(book => book.status === tab);

    const renderBooks = () => {
        const booksArr = tab != 0 ? filteredBooks : books;
        return booksArr.map(book => (
            <BookCard book={book} key={book.id} />
        ));
    }

    return(
        <div className="container mt-1">
            <div className="row">
                {renderBooks()}
            </div>
        </div>
    );
}

export default Tab;