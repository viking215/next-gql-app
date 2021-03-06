import { gql } from "@apollo/client";

export const GetPostInfo = gql`
	query GetPostInfo($id: Int!) {
		groups_by_pk(id: $id) {
			id
			tasks_id
			title
			task_gr {
				description
				created_at
				group_id
				id
				isDone
				task_user {
					avatar_url
					name
					lastName
				}
			}
		}
	}
`;
