import { ActionIcon } from "@mantine/core";
import { ShoppingBag } from "@phosphor-icons/react";

const Cart = () => {
	return (
		<ActionIcon size="lg" variant="subtle" color="#171717">
			<ShoppingBag size={22} />
		</ActionIcon>
	);
};

export default Cart;
