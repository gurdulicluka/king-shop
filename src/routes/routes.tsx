import { Route, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Homepage, LoginPage, ProductCategoryResultPage, ProductSearchResultPage } from "./lazyRoutes";

const routes = createRoutesFromElements(
	<Route>
		<Route path="/" element={<MainLayout />}>
			{/* Login */}
			<Route path="login" element={<LoginPage />} />

			{/* Homepage show all products */}
			<Route index element={<Homepage />} />

			{/* Search page show products by search query */}
			<Route path="search" element={<ProductSearchResultPage />} />

			{/* Category page show products by category */}
			<Route path="category/:categoryName" element={<ProductCategoryResultPage />} />
		</Route>
		{/* Fallback page not found route */}
		<Route path="*" element={<div>PAGE NOT FOUND</div>} />
	</Route>,
);

export { routes };
