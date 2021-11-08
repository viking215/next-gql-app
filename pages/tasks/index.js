
import {useQuery} from "@apollo/client";
import * as GetTasks from "../../API/GetTasks.graphql";
import {Button, Col, Divider, Row} from "antd";
import CardElement from "../../components/CardElement";
import SpinerLarge from "../../components/SpinerLarge";
import styled from "styled-components";


const CustomButton = styled(Button)`
    width: 88.3%;
`

const Tasks = () => {


    const {data, loading, fetchMore} = useQuery(GetTasks, {

        variables: {
            limit: 10,
            offset: 0,
        }
    })

    const loadMore = async () => {
        await fetchMore({
            variables: {
                offset: data.tasks.length
            }
        })
    }


    return <>
        <Divider orientation="left">All Tasks</Divider>
        <Row gutter={[16, 24]}>
            {(data?.tasks || []).map(post =>
                <Col className="gutter-row" span={12} key={post.id}>
                    <CardElement postData={post} loading={loading}/>
                </Col>)}
        </Row>

        {loading
            ? <SpinerLarge/>
            : <CustomButton onClick={loadMore}>Load more</CustomButton>
        }
    </>
}

export default Tasks

