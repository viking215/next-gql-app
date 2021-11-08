import '../styles/main.scss'
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {Layout, Menu} from "antd";
import styled from "styled-components";
import 'antd/dist/antd.css';
import Link from 'next/link'

const {Header} = Layout;

import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  #__next {
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: #f0f1f5;
  }
`


const MyLayout = styled(Layout)`
  width: 80%;
  margin: 0 auto;
  height: 100%;
`

const Wrapper = styled.div`
  height: 100%;
  background: #f0f2f5;
`

const MainHeader = () => {
    return (
        <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link href="/">Groups</Link></Menu.Item>
                <Menu.Item key="2"><Link href="/tasks">Tasks</Link></Menu.Item>
                <Menu.Item key="3"><Link href="/users">Users</Link> </Menu.Item>
            </Menu>
        </Header>
    )
}

const MyApp = ({Component, pageProps}) => {

    const httpLink = createHttpLink({
        uri: 'https://gql-2.test.serafim.help/v1/graphql',
    });

    const authLink = setContext((_, {headers}) => {

        return {
            headers: {
                ...headers,
                'x-hasura-admin-secret': '123-123-123-123-123',
                'content-type': 'application/json'
            }
        }
    });


    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        tasks: {
                            keyArgs: false,
                            merge(existing = [], incoming) {
                                return [...existing, ...incoming];

                            },
                        }
                    }
                }
            }
        })
    });

    return (
        <ApolloProvider client={client}>
            <GlobalStyle/>
            <Wrapper>
                <MainHeader/>
                <MyLayout>
                    <Component {...pageProps}/>
                </MyLayout>
            </Wrapper>
        </ApolloProvider>
    )
}

export default MyApp