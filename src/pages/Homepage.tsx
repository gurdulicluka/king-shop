import PageLoadingSpinner from "../components/indicator/PageLoadingSpinner";
import ProductListControlBar from "../components/product/productListControls/ProductListControlBar";
import ProductListGrid from "../components/product/ProductListGrid";
import { useGetAllProducts } from "../api/endpoints/product/productEndpoints";
import Pagination from "../components/Pagination";
import useProductQueryParams from "../hooks/useProductQueryParams";

const Homepage = () => {
	const { limit, skip, order, sortBy } = useProductQueryParams();

	const { data, isLoading, isError } = useGetAllProducts({
		query: { limit, skip, order, sortBy },
	});

	if (isError) {
		// TODO Add error status indicator with refetch and go home
		return <div>Error loading products</div>;
	}

	if (isLoading) {
		return <PageLoadingSpinner />;
	}

	return (
		<>
			<ProductListControlBar title={`All products (${data.total})`} />
			<ProductListGrid products={data.products} />
			<Pagination totalItems={data.total} limitItems={limit} skipItems={skip} />
		</>
	);
};

export default Homepage;
