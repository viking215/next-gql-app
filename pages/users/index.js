
import {useQuery} from "@apollo/client";
import * as GetAllUsers from "../../API/GetAllUsers.graphql";
import UserCard from "../../components/UserCard";
import {Divider} from "antd";

const Users = () => {

    const {data, loading} = useQuery(GetAllUsers)


    if (loading) return <div>loading...</div>
    return (
        <>
            <Divider>Users</Divider>
            <h1>All Users</h1>
            {data.users.map(user => <UserCard userInfo={user} loading={loading} key={user.id}/>)}


        </>
    )
}

export default Users


