import { SimpleGrid } from "@mantine/core";
import ProductCard from "./ProductCard";
import type { Product } from "../../api/endpoints/product/types/productEndpoints.response";

type ProductListGridProps = {
	products: Product[];
};

const ProductListGrid = ({ products }: ProductListGridProps) => {
	return (
		<SimpleGrid cols={{ base: 1, xs: 2, md: 3, lg: 4 }} spacing="md" verticalSpacing="xl" pos="relative">
			{products?.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</SimpleGrid>
	);
};

export default ProductListGrid;
