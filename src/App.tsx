import { AppShell } from "@mantine/core";
import {} from "@phosphor-icons/react";
import Header from "./components/layout/header/Header";
import Content from "./components/layout/content/Content";

function App() {
	return (
		<AppShell padding="md" header={{ height: 60 }}>
			<Header />
			<Content />
		</AppShell>
	);
}

export default App;
