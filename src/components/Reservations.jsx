//this route returns a list of books the current user has checked out.
import {useState, useEffect} from "react"; 
import { useGetBookReservationsQuery, useDeleteBookReservationsMutation, useGetUsersQuery, useUpdateBookAvailabilityMutation} from "../redux/api";

export default function Reservations = () => {
    
    const[booksReserved, setBooksReserved] = useState("");
    const[userError, setUserError] = useState(null);
    const {data: userDetails, isError, isLoading} = useGetUsersQuery();
    const {data: booksReservation, reservationsError, reservationsLoading} = useGetBooksReservationQuery();
    
    const[updateBookAvailability] = useUpdateBookAvailabilityMutation();

    useEffect(() => {

        const userDataStatus = async () => {

            try{
            //have to authenticate user account before proceeding
            const token = userDetails.token;

            if(!token){
                //return account error 
                return setUserError("Account information error - please sign in to view checked out books.");
            }

            //need to retrieve current user's book reservation information 
            const response = await userCheckoutStatus(token); 
            //need to retrieve user's current books reserved
            setBooksReserved(response);
            } catch (error) {
                setUserError("An error occurred while fetching user data.");
                console.error("Error fetching user data:", error);
                
            }
        };

       userDataStatus();     

    }, [userDetails]); //making sure that whenever userDetails change that it will fetch user data again

    const userCheckoutStatus = async (token) => {

        try{

            const response = await useGetBookReservationsQuery();

            if(!response){
                console.log("Was not able to access information.")
            }

            const data = await response.json();
            return data;
        } catch (error){
            console.error("Error fetching books reserved:", error);
            throw new Error("An error occurred while fetching books reserved.");
        }

    };
    
    const handleReturn = async () => {
        setIsReturning(true);
        setReturnError(null);
    
        try {
          // Call the mutation to return a book
          const response = await updateBookAvailability({ bookId: "bookIdToReturn", availability: false });
    
          // Check if the mutation was successful 
          if (response.error) {
            setReturnError("Failed to return the book.");
          } else {
            // Book successfully returned
          }
        } catch (error) {
          console.error("Error returning the book:", error);
          setReturnError("An error occurred while returning the book.");
        } finally {
          setIsReturning(false);
        }
      };

    return(
        <div>
            <h1>User Data</h1>
            {/* Display user details here */}

            <h2>Books Reserved</h2>
            {booksReserved.length > 0 ? (
                <ul>
                    {booksReserved.map((book) => (
                    <li key={book.id}>
                        {book.title}{" "}
                        <button onClick={() => handleReturnBook(book.id)}>
                Return Book
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books reserved.</p>
      )}
    </div>


    )
}