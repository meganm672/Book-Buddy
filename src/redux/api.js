
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        //base url for API calls
        baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",
        // set the Content-Type header to the application/json
        prepareHeaders: (headers, { getState }) => {
            const token = getState().token
            headers.set("Content-Type", "application/json")
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['Book', 'User', 'Reservation'],
    // define the API endpoints we are trying to access
    endpoints: (builder) => ({

        //specify the query for getting all the books
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["Book"]
        }),
        //singlebooks query
        getSingleBook: builder.query({
            query: (bookId) => "/books/" + bookId,
            providesTags: ["Book"]
        }),

        //reservation query
        getBookReservations: builder.query({
            query: () => "/reservations",
            providesTags: ["Reservation"]
        }),

        // delete reservations mutation
        deleteBookReservations: builder.mutation({
            query: (reservationId) => ({
                url: "/reservations/" + reservationId,
                method: "DELETE",
            })
        }),

        checkoutBook: builder.mutation({
            query: (id) => ({
                url: '/books/' + id,
                method: "PATCH",
                body: { availability: false },
            }),
            invalidatesTags: ["Book", "Reservation"]
        }),

        returnBook: builder.mutation({
            query: (id) => ({
                url: '/reservations/' + id,
                method: "DELETE",
            }),
            invalidatesTags: ["Reservation"]
        }),
        //get users/me query to view account
        getUsers: builder.query({
            query: () => "/users/me",
            providesTags: ["User"]
        }),
        //add mutations below...
        //add the users register mutation
        register: builder.mutation({
            query: (user) => ({
                url: '/users/register',
                method: "POST",
                body: user
            }),
        }),

        //add the login mutation 
        login: builder.mutation({
            query: (user) => ({
                url: '/users/login',
                method: "POST",
                body: user
            }),
        })
    })
})


export default api;

export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useRegisterMutation,
    useLoginMutation,
    useReturnBookMutation,
    useCheckoutBookMutation,
    useGetUsersQuery,
    useGetBookReservationsQuery,
    useDeleteBookReservationsMutation,
} = api;
