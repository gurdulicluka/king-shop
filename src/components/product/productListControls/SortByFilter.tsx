import { Button, Group, Menu } from "@mantine/core";
import { FunnelSimple, X } from "@phosphor-icons/react";
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
	const { searchParams, updateSearchParams } = useMutateSearchParams();

	const handleSortChange = (sortBy: string, order: string) => {
		updateSearchParams({ sortBy, order });
	};

	const getActiveSortOption = () => {
		const { sortBy, order } = searchParams;
		return sortOptions.find((option) => option.sortBy === sortBy && option.order === order);
	};

	const activeSortOption = getActiveSortOption();

	return (
		<Group>
			<Menu transitionProps={{ transition: "scale-y" }} trigger="click-hover" position="bottom-end">
				<Menu.Target>
					<Button
						leftSection={<FunnelSimple size={16} />}
						variant={activeSortOption ? "primary" : "subtle"}
						color="gray"
						size="xs"
					>
						Sort by
					</Button>
				</Menu.Target>
				<Menu.Dropdown>
					{activeSortOption && (
						<Button
							mb={12}
							onClick={() => handleSortChange("", "")}
							bg="dark"
							size="sm"
							leftSection={<X />}
							fullWidth
						>
							Clear
						</Button>
					)}
					{sortOptions.map(({ label, order, sortBy }) => {
						const isSelected = activeSortOption?.label === label;

						return (
							<Menu.Item
								bg={isSelected ? "blue" : ""}
								color={isSelected ? "white" : ""}
								onClick={() => handleSortChange(sortBy, order)}
								key={label}
							>
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
