import { useState, useEffect } from "react";
import api from "../api";
import Book from "./Books";
import '../styles/Home.css'

function Home() {
  const [books, setBooks] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    api
      .get("api/books/")
      .then((res) => res.data)
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteBook = (id) => {
    api
      .delete(`/api/books/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Book deleted");
        else alert("Failed to delete book");
        getBooks();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const createBook = (e) => {
    e.preventDefault();
    api
      .post("api/books/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Book created successfully");
          // Reset form fields after successful creation
          setTitle("");
          setContent("");
        } else {
          alert("Failed to create book");
        }
        getBooks();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <div>
        <h2>Books</h2>
      </div>
      
      {/* Create Book Form - Moved above the books list */}
      <h2>Create a book</h2>
      <form onSubmit={createBook}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            required
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>

      {/* Books List */}
      {books.map((book) => (
        <Book book={book} onDelete={deleteBook} key={book.id} />
      ))}
    </div>
  );
}

export default Home;