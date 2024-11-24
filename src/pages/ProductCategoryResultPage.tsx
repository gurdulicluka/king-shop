import { useGetProductsByCategory } from "../api/endpoints/product/productEndpoints";
import PageLoadingSpinner from "../components/indicator/PageLoadingSpinner";
import ProductListControlBar from "../components/product/productListControls/ProductListControlBar";
import ProductListGrid from "../components/product/ProductListGrid";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import useProductQueryParams from "../hooks/useProductQueryParams";

const ProductCategoryResultPage = () => {
	const { categoryName } = useParams();

	const { limit, skip, order, sortBy } = useProductQueryParams();

	const { data, isLoading, isError } = useGetProductsByCategory({
		category: categoryName,
		query: { limit, skip, order, sortBy },
	});

	if (isError) {
		// TODO Add error status indicator with refetch and go home
		return <div>Error loading products</div>;
	}

	if (isLoading) {
		return <PageLoadingSpinner />;
	}

	// FIXME Name uses slug with hyphens
	const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

	return (
		<>
			<ProductListControlBar title={title} />
			<ProductListGrid products={data.products} />
			<Pagination totalItems={data.total} limitItems={limit} skipItems={skip} />
		</>
	);
};

export default ProductCategoryResultPage;
