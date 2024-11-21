import { Group } from "@mantine/core";

import Cart from "./Cart.tsx";
import MyAccountButton from "./MyAccountButton.tsx";
import SearchInput from "../../product/productListControls/SearchInput.tsx";

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
