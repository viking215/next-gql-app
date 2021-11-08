import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import * as GetPostInfoById from "../../../API/GetPostInfoById.graphql";
import {Divider} from "antd";
import {CheckCircleTwoTone, ClockCircleTwoTone} from "@ant-design/icons";
import UserCard from "../../../components/UserCard";

const PostInfo = () => {
    const router = useRouter()

    console.log(router)


    const currentId = +router.query.id
    const {data, loading, error} = useQuery(GetPostInfoById, {
        skip: !currentId,
        variables: {
            id: currentId
        }
    })

    if (loading) return <div>loading...</div>


    const taskInfo = data.tasks_by_pk
    const userInfo = data.tasks_by_pk.task_user
    const isDone = taskInfo.isDone
        ? <CheckCircleTwoTone twoToneColor="#2db47c"/>
        : <ClockCircleTwoTone twoToneColor="#c29344"/>

    return (
        <>
            <Divider orientation="left" ><b>{taskInfo.title}</b></Divider>
            <div>Description: {taskInfo.description}</div>
            <div>Progress: {isDone}</div>
            <div>Created: {taskInfo.created_at}</div>
            <div>Updated: {taskInfo.updated_at}</div>

            <UserCard userInfo={userInfo} loading={loading}/>


        </>
    )
}

export default PostInfo