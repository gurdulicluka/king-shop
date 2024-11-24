type Query = {
	limit?: string;
	skip?: string;
	order?: "asc" | "desc" | string;
	sortBy?: "title" | "price" | string;
};

interface ProductListByCategoryRequest {
	category: string;
	query?: Query;
}
interface ProductListSearchRequest {
	q: string;
	query?: Query;
}
interface AllProductsRequest {
	query?: Query;
}

export type { Query, ProductListSearchRequest, ProductListByCategoryRequest, AllProductsRequest };
