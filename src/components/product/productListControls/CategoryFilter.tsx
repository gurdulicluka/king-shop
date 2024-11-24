import { Group, Menu, Button, SimpleGrid, Text } from "@mantine/core";
import { CaretDown } from "@phosphor-icons/react";
import { useGetProductCategoryList } from "../../../api/endpoints/product/productEndpoints";
import { useNavigate } from "react-router-dom";

const CategoryFilter = () => {
	const { data, isLoading, isFetching } = useGetProductCategoryList();

	const navigate = useNavigate();

	const handleNavigate = (category: string) => {
		return () => navigate(`/category/${category}`);
	};

	return (
		<Group>
			<Menu transitionProps={{ transition: "scale-y" }} trigger="hover" position="bottom-start">
				<Menu.Target>
					<Button
						loading={isLoading || isFetching}
						rightSection={<CaretDown size={16} />}
						variant="subtle"
						color="yellow"
						size="xs"
					>
						Categories
					</Button>
				</Menu.Target>
				<Menu.Dropdown style={{ width: "100%" }}>
					<SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} verticalSpacing="xs" py={14}>
						{data?.map((category) => {
							return (
								<Menu.Item onClick={handleNavigate(category.slug)} key={category.slug}>
									<Text size="sm">{category.name}</Text>
								</Menu.Item>
							);
						}) ?? []}
					</SimpleGrid>
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
};

export default CategoryFilter;
