import { Box, Button, Image, Modal, Stack } from "@mantine/core";
import { useState } from "react";
import type { Product } from "../../api/endpoints/product/productEndpoints.response";

type ProductDetailsViewerProps = {
	product: Product;
};

const ProductDetailsViewer = ({ product }: ProductDetailsViewerProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Button onClick={handleOpenModal} color="dark" radius="xl" size="xs" fw="bold">
				Details
			</Button>
			<Modal
				opened={isModalOpen}
				removeScrollProps={{ allowPinchZoom: true }}
				onClose={handleCloseModal}
				title={product.title}
				centered
			>
				<Box>
					<Stack>
						<Image h={300} alt={product.title} fit="cover" src={product.images[0]} />
					</Stack>
				</Box>
			</Modal>
		</>
	);
};

export default ProductDetailsViewer;
