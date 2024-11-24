import { AppShell } from "@mantine/core";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<AppShell padding="xl" header={{ height: 60 }}>
			<Header />
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
};

export default MainLayout;
