import Router from "next/router";
import { Col, Row } from "antd";
import Spinner from "components/Spinner";
import "antd/dist/antd.css";
import { GetGroupsData, GetGroupsVars } from "@/type";
import { GetGroups } from "API/GetGroups";
import { Items } from "@/styles";
import MainPageHeader from "components/MainPageHeader";
import { GetServerSideProps } from "next";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { useQuery } from "@apollo/client";

const Groups = () => {
	const { data, loading } = useQuery<GetGroupsData, GetGroupsVars>(GetGroups);

	if (loading) return <Spinner />;

	return (
		<>
			<MainPageHeader title="Groups" />
			<Row>
				{data?.groups.map((element) => (
					<Col
						span={12}
						offset={6}
						onClick={() => {
							Router.push(`/category/${element.id}`);
						}}
						key={element.id}
					>
						<Items>{element.title}</Items>
					</Col>
				))}
			</Row>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: GetGroups,
	});

	return addApolloState(apolloClient, {
		props: {},
	});
};

export default Groups;
