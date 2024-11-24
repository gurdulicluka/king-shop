import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../../api.client";
import type { LoginRequest, RefreshTokenRequest } from "./types/authEndpoints.request";
import type { LoginResponse, RefreshTokenResponse } from "./types/authEndpoints.response";

const useLogin = () => {
	return useMutation<LoginResponse, Error, LoginRequest>({
		mutationFn: async (request: LoginRequest) => {
			const response = await httpClient.post<LoginResponse>("/auth/login", request);
			return response.data;
		},
	});
};
const useRefreshToken = () => {
	return useMutation<RefreshTokenResponse, Error, RefreshTokenRequest>({
		mutationFn: async (request: RefreshTokenRequest) => {
			const response = await httpClient.post<RefreshTokenResponse>("/auth/refresh", request);
			return response.data;
		},
	});
};

export { useLogin, useRefreshToken };
