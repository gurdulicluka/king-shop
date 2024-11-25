import { Center, Group, Pagination as MantinePagination, type PaginationProps, Select } from "@mantine/core";
import { useEffect } from "react";
import useMutateSearchParams from "../../../hooks/useMutateSearchParams";

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

	const handleChangePageSize = (pageSize: string) => {
		const newLimit = Number.parseInt(pageSize, 10);
		updateSearchParams({ limit: newLimit.toString(), skip: "0" });
	};

	useEffect(() => {
		// If skip exceeds total items, reset to the last page
		if (page > totalItems) {
			updateSearchParams({ skip: ((totalItems - 1) * limit).toString() });
		}
	}, [totalItems, page, limit, updateSearchParams]);

	return (
		<Center>
			<Group align="center" mt={80} mb={40} justify="center">
				<MantinePagination siblings={0} total={totalPages} value={page} onChange={handleOnChangePage} />
				<Select
					hidden={totalItems === 0}
					checkIconPosition="right"
					data={["20", "50", "100"]}
					onChange={handleChangePageSize}
					w={80}
					placeholder="Page size"
					defaultValue={limitItems}
				/>
			</Group>
		</Center>
	);
};

export default Pagination;
