import { Group } from "@mantine/core";
import SearchProductsInput from "../product/productListControls/SearchProductsInput.tsx";
import CategoryFilter from "../product/productListControls/CategoryFilter.tsx";
import CartButton from "./CartButton.tsx";
import MyAccountButton from "./MyAccountButton.tsx";

const AppHeaderActions = () => {
	return (
		<Group gap={10} align="center" justify="end">
			<Group gap={10} align="center" justify="end" visibleFrom="md">
				<CategoryFilter />
				<SearchProductsInput />
			</Group>
			<MyAccountButton />
			<CartButton />
		</Group>
	);
};

export default AppHeaderActions;
