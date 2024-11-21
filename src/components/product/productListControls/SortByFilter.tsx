import { Group, Menu, Button, Box } from "@mantine/core";
import { FunnelSimple } from "@phosphor-icons/react";

const sortOptions = [
	{ label: "Price: Low to High", sortBy: "price", order: "asc" },
	{ label: "Price: High to Low", sortBy: "price", order: "desc" },
	{ label: "Title: Alphabetical", sortBy: "title", order: "asc" },
];

const SortByFilter = () => {
	return (
		<Group>
			<Menu transitionProps={{ transition: "scale-y" }} trigger="hover" position="bottom-start">
				<Menu.Target>
					<Button leftSection={<FunnelSimple size={16} />} variant="subtle" color="gray" size="xs">
						Sort by
					</Button>
				</Menu.Target>
				<Menu.Dropdown>
					<Box>
						{sortOptions.map((sortItem) => {
							const { label } = sortItem;
							return <Menu.Item key={label}>{label}</Menu.Item>;
						}) ?? []}
					</Box>
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
};

export default SortByFilter;
