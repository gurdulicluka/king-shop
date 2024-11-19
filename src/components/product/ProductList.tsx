import { LoadingOverlay, SimpleGrid } from "@mantine/core";
import { useProductsFilter } from "../../api/endpoints/product/productEndpoints.ts";
import ProductCard from "./ProductCard.tsx";

const ProductList = () => {
	const { data: products, isLoading, isError } = useProductsFilter({ limit: 20 });

	if (isError) {
		return <div>Error loading products</div>;
	}

	return (
		<SimpleGrid cols={{ base: 1, xs: 2, md: 3, lg: 4 }} spacing="md" verticalSpacing="xl" pos="relative">
			<LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
			{!isLoading && products?.products?.map((product) => <ProductCard key={product.id} product={product} />)}
		</SimpleGrid>
	);
};

export default ProductList;
