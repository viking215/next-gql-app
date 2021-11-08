export type Tasks = {
	title: string;
	description: string;
	id: number;
	group_id: number;
	isDone: boolean;
	created_at: string;
	updated_at: string;
	task_user: TaskUser;
};

export type TaskUser = {
	avatar_url: string;
	name: string;
	lastName: string;
};

export type GetTasksData = {
	tasks: Tasks[];
};

export type GetTasksVars = {
	limit: number;
	offset: number;
};

export type User = {
	id: number;
	name: string;
	lastName: string;
	isManager: boolean;
	avatar_url: string;
	us_tasks: { id: number }[];
};

export type GetAllUserData = {
	users: User[];
};

export type Groups = {
	title: string;
	id: number;
	tasks_id: number;
};
export type GetGroupsData = {
	groups: Groups[];
};
export type GetGroupsVars = {
	order_by: { id: number };
};

export type GroupsByPK = {
	id: number;
	tasks_id: number;
	title: string;
	task_gr: TaskGr[];
};
export type TaskGr = {
	description: string;
	created_at: string;
	group_id: number;
	id: number;
	isDone: boolean;
	task_user: TaskUser;
};

export type GetPostInfoData = {
	groups_by_pk: GroupsByPK;
};
export type GetPostInfoVar = {
	id: string | string[] | undefined;
};

export type TaskByPK = {
	title: string;
	created_at: string;
	updated_at: string;
	user_id: number;
	isDone: boolean;
	description: string;
	task_user: TaskUserInfo[];
};

export type TaskUserInfo = {
	avatar_url: string;
	isManager: boolean;
	name: string;
	lastName: string;
};

export type GetPostInfoPkData = {
	tasks_by_pk: TaskByPK;
};
export type GetPostInfoPkVars = {
	id: string | string[] | undefined;
};

export type CardElementPropsType = {
	postData: TaskGr;
};

export type UserCardPropsType = {
	userInfo: User;
	loading: boolean;
};

export type GroupsProps = {
	data: GetGroupsData;
	loading: boolean;
};
export type UsersProps = {
	data: GetAllUserData;
	loading: boolean;
};
export type TasksProps = {
	data: GetTasksData;
	loading: boolean;
};
export type CategoryInfProps = {
	data: GetPostInfoData;
	loading: boolean;
};
export type PostInfoProps = {
	data: GetPostInfoPkData;
	loading: boolean;
};
