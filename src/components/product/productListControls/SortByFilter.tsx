import { Group, Menu, Button } from "@mantine/core";
import { FunnelSimple } from "@phosphor-icons/react";
import type { Query } from "../../../api/endpoints/product/types/productEndpoints.request";
import useMutateSearchParams from "../../../hooks/useMutateSearchParams";

type SortOptions = {
	label: string;
	sortBy: Query["sortBy"];
	order: Query["order"];
}[];

const sortOptions: SortOptions = [
	{ label: "Price: Low to High", sortBy: "price", order: "asc" },
	{ label: "Price: High to Low", sortBy: "price", order: "desc" },
	{ label: "Alphabetical: A-Z", sortBy: "title", order: "asc" },
	{ label: "Alphabetical: Z-A", sortBy: "title", order: "desc" },
];

const SortByFilter = () => {
	const { updateSearchParams } = useMutateSearchParams();

	const handleSortChange = (sortBy: string, order: string) => {
		updateSearchParams({ sortBy, order });
	};

	return (
		<Group>
			<Menu transitionProps={{ transition: "scale-y" }} trigger="click-hover" position="bottom-start">
				<Menu.Target>
					<Button leftSection={<FunnelSimple size={16} />} variant="subtle" color="gray" size="xs">
						Sort by
					</Button>
				</Menu.Target>
				<Menu.Dropdown>
					{sortOptions.map(({ label, order, sortBy }) => {
						return (
							<Menu.Item onClick={() => handleSortChange(sortBy, order)} key={label}>
								{label}
							</Menu.Item>
						);
					}) ?? []}
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
};

export default SortByFilter;
