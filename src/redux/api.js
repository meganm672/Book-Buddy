
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api= createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        //base url for API calls
        baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",
        // set the Content-Type header to the application/json
        prepareHeaders: (headers) => headers.set("Content-Type", "application/json")
    }),

// define the API endpoints we are trying to access
    endpoints: (builder) => ({
        
        //specify the query for getting all the books
        getBooks: builder.query({
            query: () => "/books",
        }),
        //singlebooks query
        getSingleBook: builder.query({
            query: (bookId)=> "/books/" + bookId,
        }),
        //add mutations below...
        //add the users register mutation
        register: builder.mutation({
            query: (user) => ({
                url: '/users/register',
                method: "POST",
                body: user
            }),
            // transform the response so that we don't have to call .data all over our app
            transformResponse: (response) => response.data,
            // transform error response to extract the error, so we don't have to call .error to get it
            transformErrorResponse: (response) => response.error,
        }),

        //add the login mutation 
        login: builder.mutation({
            query: (user) => ({
                url: '/users/login',
                method: "POST",
                body: user
            }),
            transformResponse: (response) => response.data,
            transformErrorResponse: (response) => response.error,
        })
    })
})

export default api;

export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useRegisterMutation,
    useLoginMutation,
} = api;
