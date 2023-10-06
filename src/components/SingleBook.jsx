/* TODO - add your code to create a functional React component that renders details for a single book.
 Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleBook() {
  const [singleBook, setSingleBook] = useState([]);
  const [error, setError] = useState(null);
  const  params = useParams();
  const bookId = params.id;
  console.log(bookId);


  useEffect(() => {
    async function fetchSingleBookData(bookId){
        try{
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/" + bookId);
            const result = await response.json();
            console.log("from fetch single book",result.book)
            setSingleBook(result.book)
       
     }catch(e){
            console.error(e)
            setError(e)
        }
    }
    fetchSingleBookData(bookId)
  }, [bookId]);
  

 return(
     <div>
         {error && !SingleBook && (<p>Failed to load Book.</p>)}
         <div>
             <div>
                 <img src={singleBook.coverimage} alt={singleBook.title}></img>
             </div>
             <div>
                 <h3>{singleBook.title}</h3>
                 <p><b>Author:</b> {singleBook.author}</p>
                 <p><b>Description:</b> {singleBook.description}</p>
                 <p><b>Available:</b>{singleBook.available ? "true" : "false"}</p>
             </div>
         </div>
     </div>
     ) 
}
