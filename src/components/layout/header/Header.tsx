import { AppShell, Group } from "@mantine/core";
import KingLogo from "../../icons/KingLogo";
import AppHeaderActions from "../../header/AppHeaderActions";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<AppShell.Header>
			<Group h="100%" justify="space-between" px={20}>
				<NavLink to="/" style={{ height: "fit", display: "grid", placeItems: "center" }}>
					<KingLogo width={140} />
				</NavLink>
				<AppHeaderActions />
			</Group>
		</AppShell.Header>
	);
};

export default Header;
