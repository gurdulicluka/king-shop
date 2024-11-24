import { useQuery } from "@tanstack/react-query";

import { httpClient } from "../../api.client";
import type { ProductCategoryListResponse, ProductListResponse } from "./types/productEndpoints.response";
import type {
	AllProductsRequest,
	ProductListByCategoryRequest,
	ProductListSearchRequest,
	Query,
} from "./types/productEndpoints.request";
import { createQueryString } from "../../../utils/createQueryString";

const useGetAllProducts = (request: AllProductsRequest) => {
	const { query } = request;
	return useQuery<ProductListResponse, Error>({
		queryKey: ["products", query],
		queryFn: async () => {
			const queryString = createQueryString<Query>(query);

			const response = await httpClient.get<ProductListResponse>(`/products${queryString}`);
			return response.data;
		},
	});
};

const useProductsSearch = (request: ProductListSearchRequest) => {
	const { q: search, query } = request;
	return useQuery<ProductListResponse, Error>({
		queryKey: ["productSearch", search, query],
		queryFn: async () => {
			const queryString = createQueryString<{ q: string }>({
				...query,
				q: search,
			} satisfies Query & { q: string });

			const response = await httpClient.get<ProductListResponse>(`/products/search${queryString}`);
			return response.data;
		},
	});
};

const useGetProductsByCategory = (request: ProductListByCategoryRequest) => {
	const { category, query } = request;
	return useQuery<ProductListResponse, Error>({
		queryKey: ["categoryProducts", category, query],
		queryFn: async () => {
			const queryString = createQueryString<Query>(query);

			const response = await httpClient.get<ProductListResponse>(
				`/products/category/${category}${queryString}`,
			);
			return response.data;
		},
	});
};

const useGetProductCategoryList = () => {
	return useQuery<ProductCategoryListResponse, Error>({
		queryKey: ["productCategoryList"],
		queryFn: async () => {
			const response = await httpClient.get<ProductCategoryListResponse>("/products/categories");
			return response.data;
		},
	});
};

export { useGetAllProducts, useProductsSearch, useGetProductCategoryList, useGetProductsByCategory };
