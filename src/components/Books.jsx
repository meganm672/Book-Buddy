/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the 
SingleBook component and view its details. */

import React, {useState, useEffect } from "react"


export default function AllBooks(){
    const [books, setBooks]= useState([]);
    const [error, setError] = useState(null);

    useEffect(() =>{
        async function fetchBookData(){
            try{
                const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
            const result = await response.json();
            console.log(result.books);
            setBooks(result.books)
            }catch(e){
                console.error(e)
                setError(e)
            }
        }
        fetchBookData();
    },[])

    return(
       <div>
            {error && !books && (<p> Failed to load books from api</p>)}
            {books
            ?(
                books.map((book) =>{
                    return(
                        <div key={book.title} >
                        <div >
                            <img src={book.coverimage} alt={book.title} ></img>
                        </div>
                        <div >
                            <h3>{book.title}</h3>
                            <p><b> Author: </b>{book.author}</p>
                            <p> <b>Description: </b>{book.description}</p>
                            <p><b>Availible: </b> {book.available}</p>
                            {/* <button onClick={()=> navigate("/books/" + books.id)} >Player Info</button> */}
                        </div>
                    </div>
                    )
                })
            ) : !error && <p>Loading...</p>}
       </div>
    )
}

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
