import { useQuery } from "@apollo/client";
import { GetTasks } from "API/GetTasks";
import { Col, Row } from "antd";
import CardElement from "components/CardElement";
import { GetTasksData, GetTasksVars, TasksProps } from "@/type";
import { FC, useState } from "react";
import { CenteredButton, CustomButton, CustomSkeleton } from "@/styles";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { GetServerSideProps } from "next";
import MainPageHeader from "components/MainPageHeader";

const LIMIT = 10;

const Tasks: FC<TasksProps> = () => {
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	const { data, loading, fetchMore } = useQuery<GetTasksData, GetTasksVars>(
		GetTasks,
		{
			variables: {
				limit: LIMIT,
				offset: 0,
			},
		}
	);

	const isLoading: boolean = isLoadingMore || loading;
	const loadMore = async () => {
		setIsLoadingMore(true);

		await fetchMore({
			variables: {
				offset: data?.tasks.length,
				limit: LIMIT,
			},
		});
		setIsLoadingMore(false);
	};

	return (
		<>
			<MainPageHeader title="Tasks" />
			<Row>
				{(data?.tasks || []).map((post) => (
					<Col span={12} offset={6} key={post.id}>
						<CardElement postData={post} />
					</Col>
				))}
				{isLoading &&
					Array.from({ length: LIMIT }, (_, i) => (
						<Col span={12} offset={6}>
							<CustomSkeleton
								avatar
								title={false}
								loading={true}
								active={true}
								key={i}
							/>
						</Col>
					))}
				<Col span={12} offset={6}>
					<CenteredButton>
						{isLoading || (
							<CustomButton onClick={loadMore}>Load more</CustomButton>
						)}
					</CenteredButton>
				</Col>
			</Row>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query<GetTasksData, GetTasksVars>({
		query: GetTasks,
		variables: {
			limit: LIMIT,
			offset: 0,
		},
	});
	return addApolloState(apolloClient, {
		props: {},
	});
};

export default Tasks;
