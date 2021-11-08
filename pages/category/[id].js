import Router, {useRouter} from "next/router";
import * as GetPostInfo from '../../API/GetPostInfo.graphql'
import {useQuery} from "@apollo/client";
import CardElement from "../../components/CardElement";
import {Col, Divider, Row} from "antd";


const CategoryInfo = () => {
    const router = useRouter()

const currentId = +router.query.id
    const {data, loading, error} = useQuery(GetPostInfo, {
        skip: !currentId,
        variables: {
            id: currentId
        }
    })


    if (loading) return <div>loading...</div>
    return (
        <>
            <Divider orientation="left" ><b>{data.groups_by_pk.title}</b></Divider>
            <Row gutter={[12, 12]}>
                    {data.groups_by_pk.task_gr.map(post => <Col className="gutter-row" span={12} key={post.id}>
                        <CardElement  postData={post} loading={loading}/></Col>)}
            </Row>


        </>
    )

}

export default CategoryInfo