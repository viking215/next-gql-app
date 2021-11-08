import { gql } from "@apollo/client";

export const GetAllUsers = gql`
	query GetAllUser {
		users {
			id
			name
			lastName
			isManager
			avatar_url
			us_tasks {
				id
			}
		}
	}
`;
