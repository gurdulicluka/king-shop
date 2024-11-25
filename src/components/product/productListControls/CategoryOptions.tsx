import { Button, Menu, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { CaretDown } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useGetProductCategoryList } from "../../../api/endpoints/product/productEndpoints";

type CategoryOptionsProps = {
	variant: "drawer" | "menu";
	closeDrawerFn?: () => void;
};

const CategoryOptions = ({ variant, closeDrawerFn }: CategoryOptionsProps) => {
	const { data, isLoading, isFetching } = useGetProductCategoryList();

	const navigate = useNavigate();

	const handleNavigate = (category: string) => {
		return () => {
			if (closeDrawerFn) {
				closeDrawerFn();
			}
			navigate(`/category/${category}`);
		};
	};

	return variant === "menu" ? (
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
	) : (
		<Stack>
			<Title mt={14} order={4}>
				Categories
			</Title>
			{data?.map((category) => {
				return (
					<Button variant="light" component="a" onClick={handleNavigate(category.slug)} key={category.slug}>
						<Text size="sm">{category.name}</Text>
					</Button>
				);
			}) ?? []}
		</Stack>
	);
};

export default CategoryOptions;
