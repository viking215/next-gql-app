import { Button, Card, Layout, List, PageHeader, Skeleton } from "antd";
import styled, { createGlobalStyle } from "styled-components";

export const CustomButton = styled(Button)`
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	width: 100%;
`;

export const CenteredButton = styled.div`
	padding-top: 5px;
`;

export const CustomSkeleton = styled(Skeleton)`
	margin-top: 15px;
	padding: 3em 2em 1em 3em;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
`;

export const Items = styled.div`
	display: flex;
	background: #001429;
	width: 90%;
	height: 70px;
	align-items: center;
	justify-content: center;
	color: white;
	cursor: pointer;
	margin-top: 20px;
	font-size: 24px;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled(List)`
	border: 1px solid rgb(235, 237, 240);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	margin-top: 12px;
`;

export const CustomCard = styled(Card)`
	margin-top: 16px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
`;

export const MyLayout = styled(Layout)`
	width: 80%;
	margin: 0 auto;
	height: 100%;
`;

export const Wrapper = styled.div`
	height: 100%;
	background: #f0f2f5;
`;

export const GlobalStyle = createGlobalStyle`
  #__next {
    height: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: #f0f1f5;
  }
`;

export const StyledPageHeader = styled(PageHeader)`
	margin-top: 8px;
	width: 100%;
`;

export const ListItem = styled(List.Item)`
	margin: 0 30px 5px 30px;
`;
