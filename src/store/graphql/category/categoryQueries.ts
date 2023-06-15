import {gql} from "@apollo/client";

export const GET_ALL = gql`
 query {
   category {
    getAll {
     id, 
     name, 
     countOfJobs 
     } 
   }
 }
 `;