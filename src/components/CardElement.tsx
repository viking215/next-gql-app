import { Avatar } from "antd";
import { CheckCircleTwoTone, ClockCircleTwoTone } from "@ant-design/icons";
import Router from "next/router";
import { CardElementPropsType } from "@/type";
import { ListItem, StyledList } from "@/styles";

const CardElement = ({ postData }: CardElementPropsType) => {
	const authorInfo = postData.task_user;

	const isDone = postData.isDone ? (
		<div>
			Progress: <CheckCircleTwoTone twoToneColor="#2db47c" />
		</div>
	) : (
		<div>
			Progress: <ClockCircleTwoTone twoToneColor="#c29344" />
		</div>
	);

	const created = `Create: ${postData.created_at}`;

	return (
		<StyledList itemLayout="horizontal">
			<ListItem
				actions={[
					<a key={postData.id}>{created}</a>,
					<a key={postData.id}>{isDone}</a>,
				]}
				title={postData.description}
				style={{ marginTop: 16 }}
				onClick={() => {
					Router.push(`/category/post/${postData.id}`);
				}}
			>
				<ListItem.Meta
					avatar={<Avatar size={64} src={authorInfo.avatar_url} />}
					title={postData.description}
					description={`${authorInfo.name} | ${authorInfo.lastName}`}
				/>
			</ListItem>
		</StyledList>
	);
};

export default CardElement;
