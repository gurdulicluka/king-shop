import { Group, ActionIcon } from "@mantine/core";
import { User, ShoppingBag, Heart } from "@phosphor-icons/react";
import AppHeaderSearch from "./AppHeaderSearch";

const AppHeaderActions = () => {
	return (
		<Group gap={10} align="center" justify="end">
			<AppHeaderSearch />
			<ActionIcon size="lg" variant="subtle" color="#171717">
				<User size={22} />
			</ActionIcon>
			<ActionIcon size="lg" variant="subtle" color="#171717">
				<Heart size={22} />
			</ActionIcon>
			<ActionIcon size="lg" variant="subtle" color="#171717">
				<ShoppingBag size={22} />
			</ActionIcon>
		</Group>
	);
};

export default AppHeaderActions;
