import { TextInput } from "@mantine/core";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useController, useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type SearchData = {
	search: string;
};

const SearchProductsInput = () => {
	const { control, handleSubmit, reset: resetForm } = useForm<SearchData>();
	const { pathname } = useLocation();
	const [_, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const { field } = useController({
		name: "search",
		control,
		defaultValue: "",
	});

	const onSubmit = (data: SearchData) => {
		// If no value in search input do early return
		if (!data.search) return;

		// Reset input value on each submission for better UX
		resetForm({
			search: "",
		});

		// If already on search results page change params instead of navigating
		if (pathname === "/search") {
			setSearchParams({ q: data.search });
			return;
		}

		navigate(`/search?q=${data.search}`, { replace: true });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				{...field}
				mt="md"
				radius="xl"
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
