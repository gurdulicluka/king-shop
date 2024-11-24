import { Box, Button, Image, Modal } from "@mantine/core";
import { useState } from "react";
import type { Product } from "../../api/endpoints/product/types/productEndpoints.response";
import { useMediaQuery } from "@mantine/hooks";

type ProductDetailsViewerProps = {
	product: Product;
};

const ProductDetailsViewer = ({ product }: ProductDetailsViewerProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 50em)");

	const { title, images, brand, category, description, rating, price, availabilityStatus } = product;

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
				title={product.title}
				centered
			>
				<Box>
					<Image h={300} alt={product.title} fit="contain" src={product.images[0]} />
				</Box>
			</Modal>
		</>
	);
};

export default ProductDetailsViewer;
