import { StyledPageHeader } from "@/styles";
import { useRouter } from "next/router";

const MainPageHeader = ({ title = "Title" }: { title?: string }) => {
	const router = useRouter();

	return (
		<StyledPageHeader
			className="site-page-header"
			onBack={() => router.back()}
			title={title}
		/>
	);
};

export default MainPageHeader;
