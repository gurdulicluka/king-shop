import {} from "@phosphor-icons/react";
import { Router } from "./routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineProvider } from "@mantine/core";
import "./styles/fonts.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

const queryClient = new QueryClient();

const theme = createTheme({
	fontFamily: "Poppins, sans-serif",
	headings: { fontFamily: "Poppins, sans-serif" },
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme}>
				<Notifications />
				<Router />
			</MantineProvider>
		</QueryClientProvider>
	);
}

export default App;
