import {gql} from "@apollo/client";

export const GetGroups = gql`
    query GetGroups {
        groups(order_by: { id: asc }) {
            title
            id
            tasks_id
        }
    }
`


