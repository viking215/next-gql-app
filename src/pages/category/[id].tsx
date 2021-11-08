import CardElement from "components/CardElement";
import { Col, Row } from "antd";
import { GetPostInfoData, GetPostInfoVar, TaskGr } from "@/type";
import { GetPostInfo } from "API/GetPostInfo";
import MainPageHeader from "components/MainPageHeader";
import Spinner from "components/Spinner";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { GetServerSideProps } from "next";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const CategoryInfo = () => {
	const router = useRouter();
	const { id } = router.query;

	const { data, loading } = useQuery<GetPostInfoData, GetPostInfoVar>(
		GetPostInfo,
		{
			variables: {
				id,
			},
		}
	);

	if (loading) return <Spinner />;

	return (
		<>
			<MainPageHeader title={data?.groups_by_pk.title} />
			<Row>
				{data?.groups_by_pk.task_gr.map((post: TaskGr) => (
					<Col span={12} offset={6} key={post.id}>
						<CardElement postData={post} key={post.id} />
					</Col>
				))}
			</Row>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const apolloClient = initializeApollo();

	const { id } = context.query;
	await apolloClient.query<GetPostInfoData, GetPostInfoVar>({
		query: GetPostInfo,
		variables: {
			id,
		},
	});
	return addApolloState(apolloClient, {
		props: {},
	});
};

export default CategoryInfo;
