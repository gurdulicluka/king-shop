import useMutateSearchParams from "../hooks/useMutateSearchParams";

const useProductQueryParams = () => {
	const { searchParams } = useMutateSearchParams();

	const limit = searchParams.limit || "20";
	const skip = searchParams.skip || "0";
	const order = searchParams.order;
	const sortBy = searchParams.sortBy;
	const search = searchParams.q;

	return { limit, skip, order, sortBy, search };
};

export default useProductQueryParams;
