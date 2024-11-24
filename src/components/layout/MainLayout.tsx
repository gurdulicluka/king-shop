import { AppShell } from "@mantine/core";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import PageLoadingSpinner from "../indicator/PageLoadingSpinner";

const MainLayout = () => {
	return (
		<AppShell miw={345} padding="xl" header={{ height: 60 }}>
			<Header />
			<AppShell.Main>
				<Suspense fallback={<PageLoadingSpinner />}>
					<Outlet />
				</Suspense>
			</AppShell.Main>
		</AppShell>
	);
};

export default MainLayout;
