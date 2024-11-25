import { Card, Center, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";
import type { Product } from "../../api/endpoints/product/types/productEndpoints.response";
import ProductDetailsViewer from "./ProductDetailsViewer";

type ProductCardProps = {
	product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
	const { title, price, description, thumbnail } = product;

	return (
		<>
			<Card p="sm" radius="md" withBorder shadow="xs">
				{/* Product thumbnail */}
				<Card.Section pos="relative">
					<Center>
						<Image src={thumbnail} alt={title} h={320} maw={300} fit="contain" />
					</Center>
					<Divider />
				</Card.Section>

				<Stack mt="md">
					{/* Title  */}
					<Title size="md" order={3} lineClamp={1}>
						{title}
					</Title>

					{/* Description */}
					<Text size="sm" c="dimmed" lineClamp={2}>
						{description.length > 100 ? `${description.slice(0, 100)}...` : description}
					</Text>

					{/* Price and see details */}
					<Group justify="space-between" mt="sm">
						<Text size="lg" c="teal">
							${price.toFixed(2)}
						</Text>
						<ProductDetailsViewer product={product} />
					</Group>
				</Stack>
			</Card>
		</>
	);
};

export default ProductCard;
