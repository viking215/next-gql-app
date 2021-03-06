import { gql } from "@apollo/client";

export const GetPostInfoById = gql`
	query GetInfoPostById($id: Int!) {
		tasks_by_pk(id: $id) {
			task_user {
				avatar_url
				isManager
				name
				lastName
				us_tasks {
					id
				}
			}
			title
			created_at
			updated_at
			user_id
			isDone
			description
		}
	}
`;
