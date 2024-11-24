import type { Product } from "../../api/endpoints/product/types/productEndpoints.response.ts";
import ProductListControlBar from "./productListControls/ProductListControlBar.tsx";
import ProductListGrid from "./ProductListGrid.tsx";

type ProductListProps = {
	products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
	return (
		<>
			<ProductListControlBar />
			<ProductListGrid products={products} />
		</>
	);
};

export default ProductList;
