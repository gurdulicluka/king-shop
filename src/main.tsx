import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/fonts.css";

import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const theme = createTheme({
	fontFamily: "Poppins, sans-serif",
	headings: { fontFamily: "Poppins, sans-serif" },
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<MantineProvider theme={theme}>
			<StrictMode>
				<App />
			</StrictMode>
		</MantineProvider>
	</QueryClientProvider>,
);
