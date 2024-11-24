import { useSearchParams } from "react-router-dom";
import {} from "@mantine/core";
import { useProductsSearch } from "../api/endpoints/product/productEndpoints";
import PageLoadingSpinner from "../components/indicator/PageLoadingSpinner";
import ProductListGrid from "../components/product/ProductListGrid";
import ProductListControlBar from "../components/product/productListControls/ProductListControlBar";

const ProductSearchResultPage = () => {
	const [searchParams] = useSearchParams();

	const searchQuery = searchParams.get("q");

	const { data, isLoading, isError } = useProductsSearch({ q: searchQuery, query: { limit: 20 } });

	if (isError) {
		// TODO Add error status indicator with refetch and go home
		return <div>Error loading products</div>;
	}

	if (isLoading) {
		return <PageLoadingSpinner />;
	}

	return (
		<>
			<ProductListControlBar title={`Search results for: ${searchQuery}`} />
			<ProductListGrid products={data.products} />
		</>
	);
};

export default ProductSearchResultPage;
