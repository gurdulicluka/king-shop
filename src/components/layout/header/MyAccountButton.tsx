import { ActionIcon } from "@mantine/core";
import { User } from "@phosphor-icons/react";

const MyAccountButton = () => {
	return (
		<ActionIcon size="lg" variant="subtle" color="#171717">
			<User size={22} />
		</ActionIcon>
	);
};

export default MyAccountButton;
