import "antd/dist/antd.css";
import { Avatar, Card, Col, Row, Skeleton } from "antd";
import { UserCardPropsType } from "@/type";
import { CustomCard } from "@/styles";
import styled from "styled-components";

const { Meta } = Card;

const MetaCard = styled(Meta)`
	margin-left: 30px;
`;

const UserCard = ({ userInfo, loading }: UserCardPropsType) => {
	return (
		<Row>
			<Col span={12} offset={6}>
				<CustomCard>
					<Skeleton loading={loading} avatar active>
						<MetaCard
							avatar={<Avatar size={64} src={userInfo.avatar_url} />}
							title={`${userInfo.name} ${userInfo.lastName}`}
							description={`${
								userInfo.isManager ? "Мanager," : ""
							}  Posts count: ${userInfo.us_tasks.length}`}
						/>
					</Skeleton>
				</CustomCard>
			</Col>
		</Row>
	);
};

export default UserCard;
