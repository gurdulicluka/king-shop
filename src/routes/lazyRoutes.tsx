import React from "react";

// Centralized lazy imports for all pages
const Homepage = React.lazy(() => import("../pages/Homepage"));
const ProductSearchResultPage = React.lazy(() => import("../pages/ProductSearchResultPage"));
const ProductCategoryResultPage = React.lazy(() => import("../pages/ProductCategoryResultPage"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));

export { Homepage, ProductSearchResultPage, ProductCategoryResultPage, LoginPage };
