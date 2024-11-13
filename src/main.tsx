import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { MantineProvider } from "@mantine/core";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
	<MantineProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</MantineProvider>,
);
