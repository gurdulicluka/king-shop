import { Box, Group } from "@mantine/core";
import CategoryOptions from "../product/productListControls/CategoryOptions.tsx";
import SearchProductsInput from "../product/productListControls/SearchProductsInput.tsx";
import CartButton from "./CartButton.tsx";
import MyAccountButton from "./MyAccountButton.tsx";

const AppHeaderActions = () => {
	return (
		<Group gap={10} align="center" justify="end">
			<Group gap={10} w={400} align="center" justify="end" visibleFrom="md">
				<CategoryOptions variant="menu" />
				<Box flex={1}>
					<SearchProductsInput />
				</Box>
			</Group>
			<MyAccountButton />
			<CartButton />
		</Group>
	);
};

export default AppHeaderActions;
