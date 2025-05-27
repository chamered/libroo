import BookCard from './BookCard';

function Tab({books, tab, onDelete, onEdit}) {
    const filterBooks = () => {
        switch(tab) {
            case "to-read":
                return books.filter(book => book.status === 1);
            case "reading":
                return books.filter(book => book.status === 2);
            case "read":
                return books.filter(book => book.status === 3);
            default:
                return books;
        }
    };

    return(
        <div className="container mt-1">
            <div className="row">
                {console.log(filterBooks())}
                {filterBooks().map(book => (
                    <BookCard book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </div>
        </div>
    );
}

export default Tab;