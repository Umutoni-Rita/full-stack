import "../styles/Note.css"

function Book({ book, onDelete }) {
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
export default Book