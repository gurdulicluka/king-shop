import { Box, Button, Divider, Group, Image, Modal, Rating, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import type { Product } from "../../api/endpoints/product/types/productEndpoints.response";

type ProductDetailsViewerProps = {
	product: Product;
};

const ProductDetailsViewer = ({ product }: ProductDetailsViewerProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 50em)");

	const { title, brand, category, description, rating, price, stock } = product;

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Button onClick={handleOpenModal} color="dark" variant="filled" radius="xl" size="xs" fw="bold">
				Details
			</Button>
			<Modal
				opened={isModalOpen}
				removeScrollProps={{ allowPinchZoom: true }}
				onClose={handleCloseModal}
				fullScreen={isMobile}
				transitionProps={{ transition: "fade", duration: 200 }}
				centered
			>
				<Stack>
					<Box>
						<Image h={280} alt={product.title} fit="contain" src={product.images[0]} />
					</Box>
					<Divider />
					<Stack>
						<Rating value={rating} fractions={2} readOnly />
						<Title order={4}>{title}</Title>
						<Text size="sm">{description}</Text>
						<Group justify="space-between" mt="sm">
							<Text c="dark">{`In stock: ${stock}`}</Text>
							<Text size="xl" c="teal">
								${price.toFixed(2)}
							</Text>
						</Group>
						<Stack>
							<Button fullWidth bg="dark">
								Buy now
							</Button>
							<Button fullWidth>Add to cart</Button>
						</Stack>
					</Stack>
				</Stack>
			</Modal>
		</>
	);
};

export default ProductDetailsViewer;
