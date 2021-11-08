import {useQuery} from "@apollo/client";
import GetGroups from '../API/GetGroups.graphql'
import Router from "next/router";
import styled from "styled-components";
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

const Index = () => {

    const {data, loading} = useQuery(GetGroups)

    const Items = styled.div`
      display: flex;
      background: #1b1d31;
      width: 90%;
      height: 70px;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      color: white;
      cursor: pointer;
      
    `

    if (loading) return <div>Loading...</div>
    return (

        <>
            <Divider orientation="left">Title groups, make page with grid (AntD)</Divider>

            <Row gutter={[16, 24]}>
                {data.groups.map(element => (
                    <Col className="gutter-row" span={12} onClick={() => {
                        Router.push(`/category/${element.id}`)
                    }} key={element.id}><Items>{element.title}</Items></Col>
                ))}
            </Row>
        </>
    )
}

export default Index