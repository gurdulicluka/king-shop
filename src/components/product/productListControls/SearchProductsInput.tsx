import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import InputText from "../../form/InputText";
import { MagnifyingGlass } from "@phosphor-icons/react";
import useMutateSearchParams from "../../../hooks/useMutateSearchParams";

type SearchData = {
	search: string;
};

const SearchProductsInput = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { updateSearchParams } = useMutateSearchParams();
	const { control, handleSubmit, reset: resetForm } = useForm<SearchData>({ defaultValues: { search: "" } });

	const onSubmit = (data: SearchData) => {
		// If no value in search input do early return
		if (!data.search) return;

		// Reset input value on each submission for better UX
		resetForm({
			search: "",
		});

		// If already on search results page change params instead of navigating
		if (pathname === "/search") {
			updateSearchParams({ q: data.search });
			return;
		}

		navigate(`/search?q=${data.search}`, { replace: true });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputText
				name="search"
				control={control}
				rightSectionPointerEvents="none"
				rightSection={<MagnifyingGlass size={22} />}
				placeholder="Search products"
				variant="filled"
				styles={{
					root: {
						"--mantine-spacing-md": "0px",
						width: "340px",
					},
				}}
			/>
		</form>
	);
};

export default SearchProductsInput;
