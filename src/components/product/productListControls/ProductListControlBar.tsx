import { Group, Title } from "@mantine/core";
import SortByFilter from "./SortByFilter";
import PriceRangeFilter from "./PriceRangeFilter";

type ProductListControlBarProps = {
	title?: string;
};

const ProductListControlBar = ({ title }: ProductListControlBarProps) => {
	return (
		<Group justify={title ? "space-between" : "end"} align="start">
			{title && (
				<Title order={1} size="md">
					{title}
				</Title>
			)}
			<Group mb={14}>
				<SortByFilter />
				<PriceRangeFilter />
			</Group>
		</Group>
	);
};

export default ProductListControlBar;
