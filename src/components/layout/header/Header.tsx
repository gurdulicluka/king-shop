import { AppShell, Group } from "@mantine/core";
import KingLogo from "../../icons/KingLogo";
import AppHeaderActions from "./AppHeaderActions";

const Header = () => {
	return (
		<AppShell.Header>
			<Group h="100%" justify="space-between" px={20}>
				<KingLogo width={140} />
				<AppHeaderActions />
			</Group>
		</AppShell.Header>
	);
};

export default Header;
