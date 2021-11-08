import { gql } from "@apollo/client";

export const GetTasks = gql`
	query getTasks($limit: Int!, $offset: Int!) {
		tasks(limit: $limit, offset: $offset) {
			title
			description
			id
			group_id
			isDone
			created_at
			updated_at
			task_user {
				avatar_url
				name
				lastName
			}
		}
	}
`;
