import { ActionIcon } from "@mantine/core";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import useMutateSearchParams from "../../../hooks/useMutateSearchParams";
import InputText from "../../form/InputText";

type SearchData = {
	search: string;
};

type SearchProductsInputProps = {
	closeDrawerFn?: () => void;
};

const SearchProductsInput = ({ closeDrawerFn }: SearchProductsInputProps) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { updateSearchParams } = useMutateSearchParams();
	const { control, handleSubmit, reset: resetForm } = useForm<SearchData>({ defaultValues: { search: "" } });

	const onSubmit = (data: SearchData) => {
		// If no value in search input do early return
		if (!data.search) return;
		closeDrawerFn();

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
		<form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
			<InputText
				name="search"
				control={control}
				rightSection={
					<ActionIcon type="submit" variant="transparent" c="gray">
						<MagnifyingGlass size={22} />
					</ActionIcon>
				}
				placeholder="Search products"
				variant="filled"
				styles={{
					root: {
						"--mantine-spacing-md": "0px",
						width: "100%",
					},
				}}
			/>
		</form>
	);
};

export default SearchProductsInput;
