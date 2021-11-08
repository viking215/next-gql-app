import UserCard from "components/UserCard";
import { Col, Row } from "antd";
import Spinner from "components/Spinner";
import { GetAllUsers } from "API/GetAllUsers";
import MainPageHeader from "components/MainPageHeader";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { useQuery } from "@apollo/client";
import { GetAllUserData, User } from "@/type";
import { GetServerSideProps } from "next";

const Users = () => {
	const { data, loading } = useQuery<GetAllUserData>(GetAllUsers);

	if (loading) return <Spinner />;
	return (
		<>
			<MainPageHeader title="Users" />
			<Row>
				{data?.users.map((user: User) => (
					<Col span={12} offset={6} key={user.id}>
						<UserCard userInfo={user} loading={loading} />
					</Col>
				))}
			</Row>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: GetAllUsers,
	});
	return addApolloState(apolloClient, {
		props: {},
	});
};

export default Users;
