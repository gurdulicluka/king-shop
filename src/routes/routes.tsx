import { createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Homepage from "../pages/Homepage";
import ProductSearchResultPage from "../pages/ProductSearchResultPage";
import ProductCategoryResultPage from "../pages/ProductCategoryResultPage";
// TODO Lazy load routes and page component
// TODO Auth handler, maybe a provider or from App.tsx pass through the Router component
// TODO Redirect based on auth
// TODO Create ErrorBoundary component and catch all component

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
