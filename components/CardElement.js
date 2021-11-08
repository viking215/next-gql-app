import {Skeleton, Card, Avatar,} from 'antd';
import {
    CheckCircleTwoTone,
    ClockCircleTwoTone,
} from '@ant-design/icons';
import Router from "next/router";




const CardElement = ({postData, loading}) => {

    const authorInfo = postData.task_user
    const {Meta} = Card;

    const isDone = postData.isDone
        ? <div>Progress: <CheckCircleTwoTone twoToneColor="#2db47c"/></div>
        : <div>Progress: <ClockCircleTwoTone twoToneColor="#c29344"/></div>

    const create = `Created: ${postData.created_at}`

    return (
        <Card title={postData.description}
              style={{width: 500, marginTop: 16}}
              onClick={() => {
                  Router.push(`/category/post/${postData.id}`)
              }}>
            <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={<Avatar size={64} src={authorInfo.avatar_url}/>}
                    title={create}
                    description={isDone}
                />
            </Skeleton>
        </Card>
    )
}

export default CardElement

