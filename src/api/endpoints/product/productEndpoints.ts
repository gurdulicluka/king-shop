import { useQuery } from "@tanstack/react-query";

import { httpClient } from "../../api.client";
import type { ProductCategoryListResponse, ProductListResponse } from "./productEndpoints.response";
import type { ProductListRequest, ProductListSearchRequest } from "./productEndpoints.request";

// TODO Move to utility file
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const createQueryString = <T extends Record<string, any>>(params?: T): string => {
	if (!params) return "";
	const searchParams = new URLSearchParams(
		Object.entries(params).filter(([_, value]) => value !== undefined),
	);
	return `?${searchParams.toString()}`;
};

const useProductsFilter = (params?: ProductListRequest) => {
	return useQuery<ProductListResponse, Error>({
		queryKey: ["products", params],
		queryFn: async () => {
			const queryString = createQueryString<ProductListRequest>(params);

			const response = await httpClient.get<ProductListResponse>(`/products${queryString}`);
			return response.data;
		},
	});
};

const useProductsSearch = (params?: ProductListSearchRequest) => {
	return useQuery<ProductListResponse, Error>({
		queryKey: ["productSearch", params],
		queryFn: async () => {
			const queryString = createQueryString<ProductListSearchRequest>(params);

			const response = await httpClient.get<ProductListResponse>(`/products/search${queryString}`);
			return response.data;
		},
	});
};

const useGetProductCategoryList = () => {
	return useQuery<ProductCategoryListResponse, Error>({
		queryKey: ["productCategory"],
		queryFn: async () => {
			const response = await httpClient.get<ProductCategoryListResponse>("/products/categories");
			return response.data;
		},
	});
};

export { useProductsFilter, useProductsSearch, useGetProductCategoryList };