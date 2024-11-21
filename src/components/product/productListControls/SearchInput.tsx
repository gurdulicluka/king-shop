import { TextInput } from "@mantine/core";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchInput = () => {
	return (
		<TextInput
			mt="md"
			radius="xl"
			rightSectionPointerEvents="none"
			rightSection={<MagnifyingGlass size={22} />}
			placeholder="Search products"
			variant="filled"
			styles={{
				root: {
					"--mantine-spacing-md": "0px", // Override the global variable locally
					width: "340px",
				},
			}}
		/>
	);
};

export default SearchInput;
