import 'antd/dist/antd.css';
import { Avatar, Card, Skeleton,} from 'antd';

const UserCard = ({userInfo, loading}) => {

    const { Meta } = Card;

    return (
        <>
            <Card style={{ width: 300, marginTop: 16 }}>
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={<Avatar size={64} src={userInfo.avatar_url} />}
                        title={`${userInfo.name} ${userInfo.lastName}`}
                        description={ `${userInfo.isManager ? 'Мanager' : ''} Tasks count: ${userInfo.us_tasks.length} `}


                    />
                </Skeleton>
            </Card>
        </>
    )
}

export default UserCard




