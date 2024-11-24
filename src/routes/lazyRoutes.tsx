import React from "react";

// Centralized lazy imports for all pages
const Homepage = React.lazy(() => import("../pages/Homepage"));
const ProductSearchResultPage = React.lazy(() => import("../pages/ProductSearchResultPage"));
const ProductCategoryResultPage = React.lazy(() => import("../pages/ProductCategoryResultPage"));

export { Homepage, ProductSearchResultPage, ProductCategoryResultPage };
