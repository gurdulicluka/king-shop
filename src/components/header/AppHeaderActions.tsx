import { Group } from "@mantine/core";

import Cart from "./Cart.tsx";
import MyAccountButton from "./MyAccountButton.tsx";
import SearchProductsInput from "../product/productListControls/SearchProductsInput.tsx";
import CategoryFilter from "../product/productListControls/CategoryFilter.tsx";

const AppHeaderActions = () => {
	return (
		<Group gap={10} align="center" justify="end" visibleFrom="md">
			<CategoryFilter />
			<SearchProductsInput />
			<MyAccountButton />
			<Cart />
		</Group>
	);
};

export default AppHeaderActions;
