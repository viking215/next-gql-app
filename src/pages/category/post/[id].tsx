import { Col, Divider, Row } from "antd";
import { CheckCircleTwoTone, ClockCircleTwoTone } from "@ant-design/icons";
import UserCard from "components/UserCard";
import Spinner from "components/Spinner";
import { GetPostInfoPkData, GetPostInfoPkVars } from "@/type";
import { GetPostInfoById } from "API/GetPostInfoById";
import MainPageHeader from "components/MainPageHeader";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const PostInfo = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, loading } = useQuery(GetPostInfoById, {
		variables: {
			id,
		},
	});

	if (loading) return <Spinner />;

	const taskInfo = data.tasks_by_pk;
	const userInfo = data.tasks_by_pk.task_user;
	const isDone = taskInfo.isDone ? (
		<CheckCircleTwoTone twoToneColor="#2db47c" />
	) : (
		<ClockCircleTwoTone twoToneColor="#c29344" />
	);

	return (
		<>
			<MainPageHeader title="TaskInfo" />
			<Row>
				<Col span={12} offset={6}>
					<Divider orientation="center">
						<b>{taskInfo.title}</b>
					</Divider>
					<Row>
						<Col span={12} offset={10}>
							<div>Description: {taskInfo.description}</div>
							<div>Progress: {isDone}</div>
							<div>Created: {taskInfo.created_at}</div>
							<div>Updated: {taskInfo.updated_at}</div>
						</Col>
					</Row>
					<Divider orientation="center">Creator</Divider>

					<UserCard userInfo={userInfo} loading={loading} />
				</Col>
			</Row>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const apolloClient = initializeApollo();

	const { id } = context.query;
	await apolloClient.query<GetPostInfoPkData, GetPostInfoPkVars>({
		query: GetPostInfoById,
		variables: {
			id,
		},
	});
	return addApolloState(apolloClient, {
		props: {},
	});
};

export default PostInfo;
