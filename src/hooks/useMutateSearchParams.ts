import { useSearchParams } from "react-router-dom";

// Used for updating searchParams without discarding existing ones
const useMutateSearchParams = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const updateSearchParams = (newParams: Record<string, string | undefined>) => {
		const updatedParams = new URLSearchParams(searchParams);

		// biome-ignore lint/complexity/noForEach:
		Object.entries(newParams).forEach(([key, value]) => {
			if (value === undefined || value === "") {
				updatedParams.delete(key);
			} else {
				updatedParams.set(key, value);
			}
		});

		setSearchParams(updatedParams);
	};

	const searchParamsMap = Object.fromEntries(searchParams.entries());

	return { searchParams: searchParamsMap, updateSearchParams };
};

export default useMutateSearchParams;
