import { Group } from "@mantine/core";
import CategoryFilter from "./CategoryFilter";
import SortByFilter from "./SortByFilter";
import PriceRangeFilter from "./PriceRangeFilter";

const ProductListControlBar = () => {
	return (
		<Group mb={14}>
			<CategoryFilter />
			<SortByFilter />
			<PriceRangeFilter />
		</Group>
	);
};

export default ProductListControlBar;
