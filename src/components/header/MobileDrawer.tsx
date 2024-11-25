import { ActionIcon, Drawer, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { List } from "@phosphor-icons/react";
import CategoryOptions from "../product/productListControls/CategoryOptions";
import SearchProductsInput from "../product/productListControls/SearchProductsInput";
import CartButton from "./CartButton";
import MyAccountButton from "./MyAccountButton";

const MobileDrawer = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Drawer
				lockScroll
				title={
					<Group>
						<MyAccountButton closeDrawerFn={close} />
						<CartButton />
					</Group>
				}
				offset={8}
				radius="md"
				position="right"
				opened={opened}
				styles={{ body: { flex: 1 }, content: { display: "flex", flexDirection: "column" } }}
				onClose={close}
			>
				<SearchProductsInput closeDrawerFn={close} />
				<CategoryOptions closeDrawerFn={close} variant="drawer" />
			</Drawer>

			<ActionIcon onClick={open} size="lg" variant="subtle" color="#171717">
				<List size={32} />
			</ActionIcon>
		</>
	);
};

export default MobileDrawer;
