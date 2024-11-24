import { createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Homepage, ProductCategoryResultPage, ProductSearchResultPage } from "./lazyRoutes";

const routes = createRoutesFromElements(
	<Route>
		{/* ------------------------------- LOGIN ROUTE ------------------------------ */}
		{/* <Route path="/login">
            <Route index element={<LoginPage />} />
			</Route> */}
		{/* ------------------------------- APP ROUTES ------------------------------- */}
		{/* <Route element={<ProtectedRoute />}> */}
		<Route path="/" element={<MainLayout />}>
			{/* Homepage show all products */}
			<Route index element={<Homepage />} />

			{/* Search page show products by search query */}
			<Route path="search" element={<ProductSearchResultPage />} />

			{/* Category page show products by category */}
			<Route path="category/:categoryName" element={<ProductCategoryResultPage />} />

			{/* Fallback page not found route */}
			<Route path="*" element={<div>PAGE NOT FOUND</div>} />
		</Route>
		{/* </Route> */}
	</Route>,
);

export { routes };
