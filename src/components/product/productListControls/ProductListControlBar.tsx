import { Group, Title } from "@mantine/core";
import SortByFilter from "./SortByFilter";

type ProductListControlBarProps = {
	title?: string;
};

const ProductListControlBar = ({ title }: ProductListControlBarProps) => {
	return (
		<Group justify={title ? "space-between" : "end"} align="center" mb={18}>
			{title && (
				<Title order={1} size="md">
					{title}
				</Title>
			)}
			<Group>
				<SortByFilter />
				{/* <PriceRangeFilter /> */}
			</Group>
		</Group>
	);
};

export default ProductListControlBar;
