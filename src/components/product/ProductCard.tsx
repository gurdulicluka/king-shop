import { Card, Image, Text, Group, Badge, Stack, Rating } from "@mantine/core";
import type { Product } from "../../api/endpoints/product/productEndpoints.response";
import ProductDetailsViewer from "./ProductDetailsViewer";

type ProductCardProps = {
	product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
	const { title, price, rating, description, thumbnail, brand } = product;

	return (
		<>
			<Card p="sm" radius="md" shadow="sm" withBorder>
				{/* Product thumbnail and brand badge */}
				<Card.Section pos="relative">
					<Badge pos="absolute" top={14} left={16} variant="white" color="dark" size="xs">
						{brand}
					</Badge>
					<Image src={thumbnail} alt={title} h={200} fit="cover" />
				</Card.Section>

				<Stack mt="md">
					{/* Title  */}
					<Stack gap={5}>
						<Text size="md" lineClamp={1}>
							{title}
						</Text>
					</Stack>

					{/* Description */}
					<Stack>
						<Text size="sm" c="dimmed" lineClamp={2}>
							{description.length > 100 ? `${description.slice(0, 100)}...` : description}
						</Text>
						<Group align="center" gap={5}>
							<Rating size="xs" value={rating} />
							<Text size="xs" lh={0} fw="lighter">
								{`(${rating})`}
							</Text>
						</Group>
					</Stack>

					{/* Price and see details */}
					<Group justify="space-between" mt="sm">
						<ProductDetailsViewer product={product} />
						<Text size="lg" c="teal">
							${price.toFixed(2)}
						</Text>
					</Group>
				</Stack>
			</Card>
		</>
	);
};

export default ProductCard;
