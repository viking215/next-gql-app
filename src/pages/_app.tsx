import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";
import { AppProps } from "next/app";
import { GlobalStyle, MyLayout, Wrapper } from "@/styles";
import { useRouter } from "next/router";
import { useApollo } from "lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

const { Header } = Layout;

const routes = [
	{ label: "Groups", link: "/groups", key: "1" },
	{ label: "Tasks", link: "/tasks", key: "2" },
	{ label: "Users", link: "/users", key: "3" },
];

const MainHeader = () => {
	const router = useRouter();

	const getDefaultSelectedKey: () => string | any = () => {
		return routes.find((r) => router.pathname.includes(r.link))?.key;
	};

	return (
		<Header className="header">
			<div className="logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				selectedKeys={[getDefaultSelectedKey()]}
			>
				{routes.map((tab, index) => (
					<Menu.Item key={tab.key}>
						<Link href={tab.link}>
							<a>{tab.label}</a>
						</Link>
					</Menu.Item>
				))}
			</Menu>
		</Header>
	);
};

const App = ({ Component, pageProps }: AppProps) => {
	const apolloClient = useApollo(pageProps);

	return (
		<ApolloProvider client={apolloClient}>
			<GlobalStyle />
			<Wrapper>
				<MainHeader />
				<MyLayout>
					<Component {...pageProps} />
				</MyLayout>
			</Wrapper>
		</ApolloProvider>
	);
};

export default App;
