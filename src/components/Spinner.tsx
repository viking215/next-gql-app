import { Space, Spin } from "antd";
import "antd/dist/antd.css";
import { SpinSize } from "antd/lib/spin";

const Spinner = ({ size = "default" }: { size?: SpinSize }) => {
	return (
		<Space size="middle">
			<Spin size={size} />
		</Space>
	);
};

export default Spinner;
