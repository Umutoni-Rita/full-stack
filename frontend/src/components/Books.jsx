import "../styles/Note.css"
import PropTypes from 'prop-types';

function Book({ book, onDelete }) {
    // eslint-disable-next-line no-unused-vars
    const formattedDate = new Date(book.created_at).toLocaleDateString("en-US");
    
  return (
    <div className="book-container">
      <p className="book-title">{book.title}</p>
      <p className="book-content">{book.content}</p>
      <p className="book-date">{}</p>
      <button className="delete-button" onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </div>
  );
}
Book.propTypes = {
  book: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book
