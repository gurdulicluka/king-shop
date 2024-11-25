import { AppShell, Center, Group } from "@mantine/core";
import { NavLink } from "react-router-dom";
import AppHeaderActions from "../../header/AppHeaderActions";
import MobileDrawer from "../../header/MobileDrawer";
import KingLogo from "../../icons/KingLogo";

const Header = () => {
	return (
		<AppShell.Header miw={345}>
			<Group h="100%" justify="space-between" px={20}>
				<NavLink to="/" style={{ height: "fit", display: "grid", placeItems: "center" }}>
					<KingLogo width={140} />
				</NavLink>
				<Center visibleFrom="md">
					<AppHeaderActions />
				</Center>
				<Center hiddenFrom="md">
					<MobileDrawer />
				</Center>
			</Group>
		</AppShell.Header>
	);
};

export default Header;
