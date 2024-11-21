import { Group } from "@mantine/core";
import Cart from "../layout/header/Cart";
import MyAccountButton from "../layout/header/MyAccountButton";
import SearchInput from "../product/productListControls/SearchInput";

const AppHeaderActions = () => {
	return (
		<Group gap={10} align="center" justify="end">
			<SearchInput />
			<MyAccountButton />
			<Cart />
		</Group>
	);
};

export default AppHeaderActions;