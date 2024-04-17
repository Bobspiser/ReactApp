import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Laver api forbindelsen med hjælp af fetch som henter baseUrl
const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://nekos.best/api/v2/neko" 
  }),

  //Opretter et endpoint på baseUrl og opretter en metode
  endpoints(builder){
    return {
      getAllProducts: builder.query({
        query: () => ({
          method: "GET",
        }),
      })
    };
  },
});

export const { useGetAllProductsQuery } = productsApi;
export { productsApi };
