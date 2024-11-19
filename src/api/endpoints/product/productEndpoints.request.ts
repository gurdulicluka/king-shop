import type { Product } from "./productEndpoints.response";

interface ProductListRequest {
	limit?: number;
	skip?: number;
	order?: "asc" | "desc";
	sortBy?: keyof Product;
}

interface ProductListSearchRequest {
	q: string;
}

export type { ProductListRequest, ProductListSearchRequest };
