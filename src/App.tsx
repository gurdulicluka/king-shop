import { AppShell, Group } from "@mantine/core";
import {} from "@phosphor-icons/react";
import ProductList from "./components/product/ProductList";
import AppHeaderActions from "./components/header/AppHeaderActions";
import AppHeaderMenu from "./components/header/AppHeaderMenu";
import KingLogo from "./components/icons/KingLogo";

function App() {
	return (
		<>
			<AppShell padding="md" header={{ height: 60 }}>
				<AppShell.Header>
					<Group h="100%" justify="space-between" px={20}>
						<Group>
							<KingLogo width={140} />
							<AppHeaderMenu />
						</Group>
						<AppHeaderActions />
					</Group>
				</AppShell.Header>
				<AppShell.Main>
					<ProductList />
				</AppShell.Main>
			</AppShell>
		</>
	);
}

export default App;
