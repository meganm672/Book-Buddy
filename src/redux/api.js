
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api= createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        //base url for API calls
        baseURl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",
        // set the Content-Type header to the application/json
        prepareHeaders: (headers) => headers.set("Content-Type", "application/json")
    })
}),

// define the API endpoints we are trying to access
    endpoints: (builder) => ({
        

        //specify the query for getting all the books
        getBooks: builder.query({
            query: () => "/books",
        })
    })

    export default api;

    