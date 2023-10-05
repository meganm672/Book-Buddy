/* TODO - add your code to create a functional React component that renders details for a single book.
 Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

 import React, { useState, useEffect } from "react";
function SingleBook() {
  const [book, setSingleBook] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books", {
      method: "GET",
      
    })
      .then((SingleBook) => SingleBook.json())
      .then((fetchBookData) => {
        setSingleBook(result.SingleBook);
        console.log(SingleBook);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
    
    </div>
  );
}
