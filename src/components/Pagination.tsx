import { Center, Pagination as MantinePagination, type PaginationProps } from "@mantine/core";
import { useEffect } from "react";
import useMutateSearchParams from "../hooks/useMutateSearchParams";

type PaginationPropType = {
	totalItems: number;
	limitItems: string;
	skipItems: string;
} & Omit<PaginationProps, "total">;

const Pagination = (props: PaginationPropType) => {
	const { totalItems, limitItems, skipItems } = props;
	const { updateSearchParams } = useMutateSearchParams();

	const skip = Number.parseInt(skipItems, 10) || 0;
	const limit = Number.parseInt(limitItems, 10) || 20;
	const page = Math.floor(skip / limit) + 1;
	const totalPages = Math.ceil(totalItems / Number.parseInt(limitItems, 10));

	const handleOnChangePage = (value: number) => {
		const newSkip = (value - 1) * limit;
		updateSearchParams({ skip: newSkip.toString() });
	};

	useEffect(() => {
		// If skip exceeds total items, reset to the last page
		if (page > totalItems) {
			updateSearchParams({ skip: ((totalItems - 1) * limit).toString() });
		}
	}, [totalItems, page, limit, updateSearchParams]);

	return (
		<Center>
			<MantinePagination
				mt={80}
				mb={40}
				total={totalPages}
				value={page}
				onChange={handleOnChangePage}
				hideWithOnePage
			/>
		</Center>
	);
};

export default Pagination;
