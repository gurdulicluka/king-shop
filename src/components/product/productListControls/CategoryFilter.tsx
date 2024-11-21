import { Group, Box, Menu, Button } from "@mantine/core";
import { CaretDown } from "@phosphor-icons/react";
import { useGetProductCategoryList } from "../../../api/endpoints/product/productEndpoints";

const CategoryFilter = () => {
	const { data, isLoading, isFetching } = useGetProductCategoryList();

	return (
		<Group>
			<Menu transitionProps={{ transition: "scale-y" }} trigger="hover" position="bottom-start">
				<Menu.Target>
					<Button
						loading={isLoading || isFetching}
						rightSection={<CaretDown size={16} />}
						variant="subtle"
						color="blue"
						size="xs"
					>
						Categories
					</Button>
				</Menu.Target>
				<Menu.Dropdown>
					<Box>
						{data?.map((category) => {
							return <Menu.Item key={category.slug}>{category.name}</Menu.Item>;
						}) ?? []}
					</Box>
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
};

export default CategoryFilter;
